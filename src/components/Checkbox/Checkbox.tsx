import React from 'react';
import { SwitchBase, SwitchProps } from '../SwitchBase';

const Checkbox = (props: SwitchProps) => {
  return <SwitchBase component='checkbox' {...props} />;
};

export default Checkbox;
