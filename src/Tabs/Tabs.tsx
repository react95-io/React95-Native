import React, { useContext, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableHighlight,
  View,
} from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { padding, margin, blockSizes } from '../common/styles';
import { Border } from '../common/styleElements';
import { Text, Panel } from '..';

type TabsProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  value: any;
  onChange?: (value: any) => void;
  stretch?: boolean;
};

const Tabs = ({
  value,
  onChange,
  children,
  stretch = false,
  ...rest
}: TabsProps) => {
  const theme = useContext(ThemeContext);

  const childrenWithProps = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }
    const tabProps = {
      selected: child.props.value === value,
      onPress: onChange,
      stretch,
    };
    return React.cloneElement(child, tabProps);
  });

  return (
    <View style={[styles.tabs]} {...rest}>
      {childrenWithProps}
      <View
        style={[
          styles.tabBodyBorder,
          {
            backgroundColor: theme.borderLight,
            borderTopColor: theme.borderLightest,
          },
        ]}
      />
    </View>
  );
};

type TabBodyProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Body = ({ children, style, ...rest }: TabBodyProps) => {
  return (
    <Panel style={[styles.body, style]} {...rest}>
      {children}
    </Panel>
  );
};

type TabProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  value: any;
  onPress?: (value: any) => void;
  selected?: boolean;
  stretch?: boolean;
};

const Tab = ({
  value,
  onPress = () => {},
  selected,
  stretch,
  children,
  ...rest
}: TabProps) => {
  const theme = useContext(ThemeContext);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => onPress(value)}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      underlayColor='none'
      style={[
        styles.tab,
        { zIndex: selected ? 1 : 0 },
        stretch ? { flexGrow: 1 } : { width: 'auto' },
        selected ? margin(0, -8) : margin(0, 0),
      ]}
      {...rest}
    >
      <View
        pointerEvents='none'
        style={[
          styles.tabContent,
          {
            height: selected ? blockSizes.md + 4 : blockSizes.md,
          },
          selected ? padding(0, 16) : padding(0, 10),
        ]}
      >
        {/* TODO: add 'background' boolean prop to Border component since its usually used with background color */}
        <Border
          radius={6}
          style={[
            {
              backgroundColor: theme.material,
            },
          ]}
          sharedStyle={{
            borderBottomWidth: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <Text>{children}</Text>
        <View style={[styles.mask, { backgroundColor: theme.material }]} />
        {isPressed && (
          <View style={[styles.focusOutline, theme.border.focusOutline]} />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    zIndex: 1,
    bottom: -2,
  },
  body: {
    display: 'flex',
    padding: 16,
  },
  tab: {
    alignSelf: 'flex-end',
  },
  tabContent: {
    justifyContent: 'center',
    width: 'auto',
  },
  tabBodyBorder: {
    height: 4,
    position: 'absolute',
    left: 4,
    right: 4,
    bottom: -2,
    borderTopWidth: 2,
  },
  mask: {
    height: 4,
    position: 'absolute',
    left: 4,
    right: 4,
    bottom: -2,
  },
  focusOutline: {
    position: 'absolute',
    left: 6,
    top: 6,
    bottom: 4,
    right: 6,
  },
});

Tabs.Tab = Tab;
Tabs.Body = Body;

export default Tabs;
