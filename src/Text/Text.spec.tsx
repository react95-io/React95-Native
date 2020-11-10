import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '..';

describe('<Text />', () => {
  it('should render children', () => {
    const { getByText } = render(<Text>Potato</Text>);

    expect(getByText('Potato')).toBeTruthy();
  });

  it('should render custom styles', () => {
    const style = { color: 'papayawhip' };

    const { getByText } = render(<Text style={style}>Potato</Text>);

    expect(getByText('Potato')).toHaveStyle(style);
  });
});
