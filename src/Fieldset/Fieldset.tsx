import React, { useContext } from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { Border } from '../common/styleElements';

export const testId = 'fieldset';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  label?: React.ReactNode;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const Fieldset = ({
  children,
  label,
  labelStyle = {},
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.wrapper, style]} testID={testId} {...rest}>
      <Border
        variant='well'
        invert
        style={[
          { marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 },
        ]}
      />
      <Border variant='well' />
      {/* TODO: allow passing components to label (see web react95 checkbox example) */}
      {label && (
        <Text
          style={[
            styles.label,
            { backgroundColor: theme.material },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginVertical: 12,
    padding: 12,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 8,
    // TODO: how to properly center the label?
    transform: [{ translateY: -8 }],
    paddingHorizontal: 8,
    fontSize: 16,
    lineHeight: 16,
  },
});

export default Fieldset;
