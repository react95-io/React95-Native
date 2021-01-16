import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableHighlight,
  View,
} from 'react-native';

import type { Theme, AnyValue } from '../../types';
import { withTheme } from '../../core/theming';

import {
  padding,
  margin,
  blockSizes,
  buildBorderStyles,
} from '../../styles/styles';
import { Border } from '../../styles/styleElements';
import { Text, Panel } from '../..';

type TabsProps = {
  children?: React.ReactNode;
  onChange?: (value: AnyValue) => void;
  stretch?: boolean;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value: AnyValue;
};

const Tabs = ({
  children,
  onChange,
  stretch = false,
  style,
  theme,
  value,
  ...rest
}: TabsProps) => {
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
    <View accessibilityRole='tablist' style={[styles.tabs, style]} {...rest}>
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
  theme: Theme;
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
  onPress?: (value: AnyValue) => void;
  selected?: boolean;
  stretch?: boolean;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  value: AnyValue;
};

const Tab = ({
  children,
  onPress = () => {},
  selected,
  stretch,
  style,
  theme,
  value,
  ...rest
}: TabProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const borderStyles = buildBorderStyles(theme);

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
        style,
      ]}
      accessibilityTraits={selected ? ['button', 'selected'] : 'button'}
      accessibilityComponentType='button'
      accessibilityRole='tab'
      accessibilityState={{
        selected,
      }}
      {...rest}
    >
      <View
        style={[
          styles.tabContent,
          {
            height: selected ? blockSizes.md + 4 : blockSizes.md,
          },
          selected ? padding(0, 16) : padding(0, 10),
        ]}
      >
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
          <View style={[styles.focusOutline, borderStyles.focusOutline]} />
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
const TabWithTheme = withTheme(Tab);
const BodyWithTheme = withTheme(Body);

Tabs.Tab = TabWithTheme;
Tabs.Body = BodyWithTheme;

export default withTheme(Tabs);
