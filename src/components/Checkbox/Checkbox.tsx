import React from 'react';
import { SwitchBase, SwitchProps } from '../SwitchBase';

import { withTheme } from '../../core/theming';

const Checkbox = (props: SwitchProps) => {
  return <SwitchBase component='checkbox' {...props} />;
};

export default withTheme(Checkbox);
