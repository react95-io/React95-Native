import React from 'react';
import { render } from '@testing-library/react-native';
import { Hourglass } from '../..';

describe('<Hourglass />', () => {
  it('should render Hourglass', () => {
    const { getByTestId } = render(<Hourglass testID='hourglass' />);
    const hourglass = getByTestId('hourglass');

    expect(hourglass).toBeTruthy();
  });

  describe('prop: size', () => {
    it('sets size correctly', () => {
      const size = 53;
      const { getByTestId } = render(
        <Hourglass testID='hourglass' size={size} />,
      );
      const hourglass = getByTestId('hourglass');

      expect(hourglass).toHaveStyle({ width: 53, height: 53 });
    });
  });
});
