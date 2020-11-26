import React from 'react';
import { render } from '@testing-library/react-native';

import { testId } from './Avatar';
import { Avatar, Text } from '..';

const size = 42;

describe('<Avatar />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Avatar>
        <Text>LOL</Text>
      </Avatar>
    );

    expect(getByText('LOL')).toBeTruthy();
  });

  it('should handle different sizes', () => {
    const { getByTestId } = render(<Avatar size={size} />);

    expect(getByTestId(testId)).toHaveStyle({ height: size, width: size });
  });

  it('should handle square avatars', () => {
    const { getByTestId, rerender } = render(<Avatar size={size} square />);

    expect(getByTestId(testId)).toHaveStyle({ borderRadius: 0 });

    rerender(<Avatar size={size} />);

    expect(getByTestId(testId)).toHaveStyle({ borderRadius: size / 2 });
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'papayawhip' };
    const { getByTestId } = render(<Avatar style={style} />);

    expect(getByTestId(testId)).toHaveStyle(style);
  });
});
