import React from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';

type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CardContent = ({ children, style = {}, ...rest }: Props) => {
  return (
    <View style={[styles.wrapper, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
  },
});

export default CardContent;
