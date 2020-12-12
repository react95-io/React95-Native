import React, { useContext } from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Text } from '..';
import { ThemeContext } from '../common/theming/Theme';
import { blockSizes } from '../common/styles';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';

// TODO: create LinkButton component that will have link colour that will serve as a clickable List.Item

type Props = React.ComponentPropsWithRef<typeof View> & {
  expanded?: boolean;
  defaultExpanded?: boolean;
  onPress?: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const ListAccordion = ({
  expanded: expandedProp,
  defaultExpanded,
  onPress,
  children,
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  style,
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  const [expanded, setExpanded] = useControlledOrUncontrolled({
    value: expandedProp,
    defaultValue: defaultExpanded,
  });

  const handlePress = () => {
    onPress?.();

    if (expandedProp === undefined) {
      setExpanded(currentExpanded => !currentExpanded);
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
          <Image
            style={[
              styles.expandIcon,
              {
                transform: [
                  {
                    rotate: expanded ? '0deg' : '180deg',
                  },
                  {
                    translateY: -2,
                  },
                ],
              },
            ]}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAM0lEQVQoU2NkIAIwoqthY2j5/4uhBkUchQNSANOErBCuCKYAJInMBmkCK0IXRBcbjG4CANI8JAqzEEN5AAAAAElFTkSuQmCC',
            }}
          />
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
  },
  expandIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  body: {},
  divider: {
    height: 2,
    width: 'auto',
  },
});

export const Divider = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.divider, { backgroundColor: theme.flatLight }]} />
  );
};

export default ListAccordion;