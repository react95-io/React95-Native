import { useState, useCallback } from 'react';
import type { AnyValue } from '../types';

type Props = {
  value: AnyValue;
  defaultValue: AnyValue;
};

export default ({
  value,
  defaultValue,
}: Props): [AnyValue, (newValue: AnyValue) => void] => {
  const isControlled = value !== undefined;
  const [controlledValue, setControlledValue] = useState(defaultValue);

  const handleChangeIfUncontrolled = useCallback(newValue => {
    if (!isControlled) {
      setControlledValue(newValue);
    }
  }, []);

  return [isControlled ? value : controlledValue, handleChangeIfUncontrolled];
};
