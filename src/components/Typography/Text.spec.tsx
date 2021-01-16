import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '../..';

const mockOpenUrl = jest.fn(url => Promise.resolve(url));

describe('<Text />', () => {
  beforeEach(() => {
    mockOpenUrl.mockClear();

    jest.doMock('react-native/Libraries/Linking/Linking', () => ({
      openURL: mockOpenUrl,
    }));
  });

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
