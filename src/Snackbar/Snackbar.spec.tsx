import React from 'react';
import { render } from '@testing-library/react-native';

import { Snackbar, Text } from '..';

describe('<Snackbar />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Snackbar>
        <Text>Banana dance</Text>
      </Snackbar>,
    );

    expect(getByText('Banana dance')).toBeTruthy();
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(
      <Snackbar style={style} testID='snackbar'>
        <Text>Snackbar</Text>
      </Snackbar>,
    );

    expect(getByTestId('snackbar')).toHaveStyle(style);
  });
});

describe('<Snackbar.Content />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Snackbar>
        <Snackbar.Content>
          <Text>Banana dance</Text>
        </Snackbar.Content>
      </Snackbar>,
    );

    expect(getByText('Banana dance')).toBeTruthy();
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(
      <Snackbar>
        <Snackbar.Content style={style} testID='content' />
      </Snackbar>,
    );

    expect(getByTestId('content')).toHaveStyle(style);
  });
});
