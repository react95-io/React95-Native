import React, { useState, useRef } from 'react';
import type { AnyValue } from '../types';

interface UpdateStateFunction extends Function {
  (n: AnyValue): void;
}

export default function useAsyncReference(
  value: AnyValue,
): [React.RefObject<AnyValue>, UpdateStateFunction] {
  const ref = useRef(value);
  const [, rerender] = useState(false);

  function updateState(newState: UpdateStateFunction) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      rerender(s => !s);
    }
  }

  return [ref, updateState];
}
