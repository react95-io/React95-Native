import React from 'react';
import { render } from '@testing-library/react-native';

import { testId } from '../Panel/Panel';
import { AppBar, Text } from '..';

describe('<AppBar />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <AppBar>
        <Text>This is an AppBar</Text>
      </AppBar>,
    );

    expect(getByTestId(testId)).toHaveTextContent('This is an AppBar');
  });

  it('should render custom styles', () => {
    const style = { marginTop: 42 };

    const { getByTestId } = render(
      <AppBar style={style}>
        <Text>This is an AppBar</Text>
      </AppBar>,
    );

    expect(getByTestId(testId)).toHaveStyle(style);
  });
});
