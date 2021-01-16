import React from 'react';
import { render } from '@testing-library/react-native';
import { Divider } from '../..';

describe('<Divider />', () => {
  it('should render Divider', () => {
    const { getByTestId } = render(<Divider testID='divider' />);
    const divider = getByTestId('divider');

    expect(divider).toBeTruthy();
  });

  describe('prop: size', () => {
    it('defaults to 100%', () => {
      const { getByTestId } = render(<Divider testID='divider' />);
      const divider = getByTestId('divider');
      expect(divider).toHaveStyle({ width: '100%' });
    });
    it('sets size correctly', () => {
      const size = 53;
      const { getByTestId } = render(<Divider testID='divider' size={size} />);
      const divider = getByTestId('divider');

      expect(divider).toHaveStyle({ width: 53 });
    });
  });

  describe('prop: orientation', () => {
    it('renders horizontal line by default', () => {
      const size = 53;
      const { getByTestId } = render(<Divider testID='divider' size={size} />);
      const divider = getByTestId('divider');

      expect(divider).toHaveStyle({ width: 53 });
    });

    it('renders vertical line when orientation="vertical"', () => {
      const size = 53;
      const { getByTestId } = render(
        <Divider testID='divider' orientation='vertical' size={size} />,
      );
      const divider = getByTestId('divider');

      expect(divider).toHaveStyle({ height: 53 });
    });
  });
});
