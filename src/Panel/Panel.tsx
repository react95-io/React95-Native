import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ThemeContext } from '../common/theming/Theme';
import { Border } from '../common/styleElements';

export const testId = 'panel';

// TODO: common interface with styleElements/Border ?
type Props = React.ComponentPropsWithRef<typeof View> & {
  children?: React.ReactNode;
  variant?: 'default' | 'well' | 'outside' | 'clear';
  style?: StyleProp<ViewStyle>;
};

const Panel = ({
  children,
  variant = 'default',
  style = {},
  ...rest
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          padding: variant === 'well' ? 2 : 4,
          backgroundColor: theme.material,
        },
        style,
      ]}
      testID={testId}
      {...rest}
    >
      {variant !== 'clear' && <Border variant={variant} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});

export default Panel;
