import React from 'react';
import { SwitchBase, SwitchProps } from '../SwitchBase';

type Props = Omit<SwitchProps, 'status'> & {
  status: 'checked' | 'unchecked';
};

const Radio = (props: Props) => {
  return <SwitchBase component='radio' {...props} />;
};

export default Radio;
