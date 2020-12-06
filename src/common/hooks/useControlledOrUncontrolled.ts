import { useState, useCallback } from 'react';

type Props = {
  value: any;
  defaultValue: any;
};

export default ({ value, defaultValue }: Props) => {
  const isControlled = value !== undefined;
  const [controlledValue, setControlledValue] = useState(defaultValue);
  const handleChangeIfUncontrolled = useCallback(newValue => {
    if (!isControlled) {
      setControlledValue(newValue);
    }
  }, []);
  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
};
