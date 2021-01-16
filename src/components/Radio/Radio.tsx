import React from 'react';
import { SwitchBase, SwitchProps } from '../SwitchBase';

import { withTheme } from '../../core/theming';

type Props = SwitchProps & {
  status: 'checked' | 'unchecked';
};

const Radio = (props: Props) => {
  return <SwitchBase component='radio' {...props} />;
};

export default withTheme(Radio);
