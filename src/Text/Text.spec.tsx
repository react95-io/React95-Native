import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Text } from '..';

const linkUrl = 'https://react95.io';

const mockOpenUrl = jest.fn(url => Promise.resolve(url));

describe('<Text />', () => {
  beforeEach(() => {
    mockOpenUrl.mockClear();

    jest.doMock('react-native/Libraries/Linking/Linking', () => ({
      openURL: mockOpenUrl
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

  it('should open a custom URL when text is a link', () => {
    const { getByText } = render(<Text linkUrl={linkUrl}>Link</Text>);

    fireEvent.press(getByText('Link'));

    expect(mockOpenUrl).toHaveBeenCalledWith(linkUrl);
  });

  it('should not open a custom URL when text is disabled', () => {
    const { getByText } = render(
      <Text linkUrl={linkUrl} disabled>
        Disabled
      </Text>
    );

    fireEvent.press(getByText('Disabled'));

    expect(mockOpenUrl).toHaveBeenCalledTimes(0);
  });
});
