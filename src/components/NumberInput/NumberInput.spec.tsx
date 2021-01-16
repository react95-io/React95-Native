import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NumberInput } from '../..';

describe('<NumberInput />', () => {
  it('should call onChange on increment press', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <NumberInput onChange={handleChange} defaultValue={2} />,
    );
    const spinButton = getByTestId('increment');
    fireEvent(spinButton, 'press');
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('should call onChange on decrement press', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <NumberInput onChange={handleChange} defaultValue={2} />,
    );
    const spinButton = getByTestId('decrement');
    fireEvent(spinButton, 'press');
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('should reach max value', () => {
    const { getByTestId } = render(
      <NumberInput defaultValue={90} min={0} max={100} step={10} />,
    );
    const input = getByTestId('input');
    const incrementButton = getByTestId('increment');
    fireEvent(incrementButton, 'press');

    expect(input.props.value).toBe('100');
  });

  it('should reach min value', () => {
    const { getByTestId } = render(
      <NumberInput defaultValue={10} min={0} max={100} step={10} />,
    );
    const input = getByTestId('input');
    const decrementButton = getByTestId('decrement');
    fireEvent(decrementButton, 'press');

    expect(input.props.value).toBe('0');
  });

  describe('prop: step', () => {
    it('should be 1 by default', () => {
      const { getByTestId } = render(<NumberInput defaultValue={0} />);
      const input = getByTestId('input');

      const incrementButton = getByTestId('increment');
      fireEvent(incrementButton, 'press');

      expect(input.props.value).toBe('1');
    });

    it('should change value by specified step', () => {
      const { getByTestId } = render(
        <NumberInput defaultValue={10} step={3} />,
      );
      const input = getByTestId('input');

      const decrementButton = getByTestId('decrement');
      fireEvent(decrementButton, 'press');

      expect(input.props.value).toBe('7');
    });

    it('should handle decimal step', () => {
      const { getByTestId } = render(
        <NumberInput defaultValue={10} step={0.3} />,
      );
      const input = getByTestId('input');

      const decrementButton = getByTestId('decrement');
      fireEvent(decrementButton, 'press');

      expect(input.props.value).toBe('9.7');
    });
  });

  describe('prop: disabled', () => {
    // it('should render disabled', () => {
    //   const { getByTestId } = render(
    //     <NumberInput defaultValue={10} disabled />,
    //   );
    //   const input = getByTestId('input');
    //     const incrementButton = getByTestId('increment');
    //     const decrementButton = getByTestId('decrement');
    //   expect(input.props.editable).toBe(false);
    //     expect(incrementButton.props.disabled).toBe(true);
    //     expect(decrementButton.props.disabled).toBe(true);
    // });
    // it('should not react to button clicks', () => {
    //   const { getByTestId } = render(
    //     <NumberInput defaultValue={10} disabled />,
    //   );
    //   const input = getByTestId('input');
    //   const incrementButton = getByTestId('increment');
    //   const decrementButton = getByTestId('decrement');
    //   fireEvent(incrementButton, 'press');
    //   expect(input.props.value).toBe('10');
    //   fireEvent(decrementButton, 'press');
    //   expect(input.props.value).toBe('10');
    // });
  });

  describe('prop: width', () => {
    it('should render component of specified width', () => {});

    it('should handle %', () => {});
  });
});
