import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import type { Sizes } from '../../types';
import { blockSizes } from '../../styles/styles';
import { testId } from './Button';
import { Button, Text } from '../..';

const noop = () => {};

describe('<Button />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Button onPress={noop}>
        <Text>Potato</Text>
      </Button>,
    );

    expect(getByText('Potato')).toBeTruthy();
  });

  it('should fire press', () => {
    const onButtonPress = jest.fn();

    const { getByRole } = render(
      <Button onPress={onButtonPress}>
        <Text>Ok</Text>
      </Button>,
    );

    fireEvent(getByRole('button'), 'press');
    expect(onButtonPress).toHaveBeenCalled();
  });

  it('should handle square sizes', () => {
    const sizes: Sizes[] = ['sm', 'md', 'lg'];

    sizes.forEach(size => {
      const { getByTestId } = render(
        <Button onPress={noop} size={size} square>
          <Text>Ok</Text>
        </Button>,
      );

      expect(getByTestId(testId)).toHaveStyle({ width: blockSizes[size] });
    });
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'papayawhip' };

    const { getByTestId } = render(
      <Button onPress={noop} style={style}>
        <Text>Ok</Text>
      </Button>,
    );

    expect(getByTestId(testId)).toHaveStyle(style);
  });
});
