import React from 'react';
import { render } from '@testing-library/react-native';

import { Desktop, Text } from '../..';

describe('<Desktop />', () => {
  it('should render children in "screen"', () => {
    const { getByTestId } = render(
      <Desktop>
        <Text>Desktop content</Text>
      </Desktop>,
    );

    expect(getByTestId('desktopScreen')).toHaveTextContent('Desktop content');
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(<Desktop style={style} testID='card' />);

    expect(getByTestId('card')).toHaveStyle(style);
  });

  it('should render custom screenStyles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(<Desktop screenStyle={style} />);

    expect(getByTestId('desktopScreen')).toHaveStyle(style);
  });
});
