import React from 'react';
import type { $RemoveChildren } from '../../types';

import { Button, ChevronIcon } from '../..';

type Props = $RemoveChildren<typeof Button>;

const AppBarBackAction = ({ disabled, ...rest }: Props) => {
  return (
    <Button disabled={disabled} square variant='menu' {...rest}>
      <ChevronIcon
        disabled={disabled}
        direction='left'
        style={{ marginLeft: -2 }}
      />
    </Button>
  );
};

export default AppBarBackAction;
