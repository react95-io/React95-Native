import React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableHighlight,
} from 'react-native';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Text, ChevronIcon } from '../..';
import { blockSizes } from '../../styles/styles';
import useControlledOrUncontrolled from '../../hooks/useControlledOrUncontrolled';

// TODO: create LinkButton component that will have link colour that will serve as a clickable List.Item

type Props = React.ComponentPropsWithRef<typeof View> & {
  children: React.ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProp<TextStyle>;
  theme: Theme;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
};

// TODO: add accessibilityState=expanded ?
const ListAccordion = ({
  children,
  defaultExpanded,
  expanded: expandedProp,
  onPress,
  style,
  subtitle,
  subtitleStyle,
  theme,
  title,
  titleStyle,
  ...rest
}: Props) => {
  const [expanded, setExpanded] = useControlledOrUncontrolled({
    value: expandedProp,
    defaultValue: defaultExpanded,
  });

  const handlePress = () => {
    onPress?.();

    if (expandedProp === undefined) {
      setExpanded((currentExpanded: boolean) => !currentExpanded);
    }
  };

  return (
    <View
      {...rest}
      style={[styles.wrapper, { borderColor: theme.flatLight }, style]}
    >
      <TouchableHighlight onPress={handlePress} accessibilityRole='button'>
        <View
          style={[styles.header, { backgroundColor: theme.flatLight }]}
          pointerEvents='none'
        >
          <View>
            {title && (
              <Text
                bold
                style={[styles.title, { color: theme.progress }, titleStyle]}
              >
                {title}
              </Text>
            )}
            {subtitle && (
              <Text secondary style={[styles.subtitle, subtitleStyle]}>
                {subtitle}
              </Text>
            )}
          </View>
          <View style={styles.expandIcon}>
            <ChevronIcon
              theme={theme}
              color={theme.progress}
              segments={3}
              direction={expanded ? 'up' : 'down'}
            />
            <ChevronIcon
              theme={theme}
              color={theme.progress}
              segments={3}
              style={{ marginVertical: 1 }}
              direction={expanded ? 'up' : 'down'}
            />
          </View>
        </View>
      </TouchableHighlight>
      {expanded && <View style={[styles.body]}>{children}</View>}
    </View>
  );
};

// TODO: do we need 'displayName' ?
// ListAccordion.displayName = 'List.Accordion';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
  },
  header: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    minHeight: blockSizes.md,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    // TODO: create separate color variable for this? or should we use theme.materialColor instead?
  },
  subtitle: {
    // TODO: make a Text component with standarized font sizes where normal is 16 / small 13 ...etc
    fontSize: 13,
    marginTop: 4,
  },
  expandIcon: {
    marginRight: 4,
  },
  body: {},
  divider: {
    height: 2,
    width: 'auto',
  },
});

type DividerProps = {
  theme: Theme;
};

const Divider = ({ theme }: DividerProps) => {
  return (
    <View style={[styles.divider, { backgroundColor: theme.flatLight }]} />
  );
};

const DividerWithTheme = withTheme(Divider);

export { DividerWithTheme as Divider };
export default withTheme(ListAccordion);
