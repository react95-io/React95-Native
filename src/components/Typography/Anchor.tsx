import React from 'react';

import type { Theme } from '../../types';
import { withTheme } from '../../core/theming';

import { Text } from '../..';

// TODO: separate Anchor props from React95 Text component

type Props = React.ComponentProps<typeof Text> & {
  theme: Theme;
  underline?: boolean;
};

const Anchor = ({
  children,
  style,
  theme,
  underline = false,
  ...rest
}: Props) => {
  return (
    <Text
      style={[
        {
          color: theme.anchor,
          textDecorationLine: underline ? 'underline' : 'none',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default withTheme(Anchor);
