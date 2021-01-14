import React, { useContext } from 'react';

import { Text } from '..';
import { ThemeContext } from '../common/theming/Theme';

type Props = React.ComponentProps<typeof Text> & {
  underline?: boolean;
};

const Anchor = ({ underline = false, children, style, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

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

export default Anchor;
