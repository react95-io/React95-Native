import React from 'react';
import { render } from '@testing-library/react-native';

import { testId } from './Cutout';
import { Cutout, Text } from '..';

describe('<Cutout />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Cutout>
        <Text>This is a Cutout</Text>
      </Cutout>
    );

    expect(getByTestId(testId)).toHaveTextContent('This is a Cutout');
  });

  it('should render custom styles', () => {
    const style = { padding: 12 };

    const { getByTestId } = render(
      <Cutout style={style}>
        <Text>Potatoe</Text>
      </Cutout>
    );

    expect(getByTestId(testId)).toHaveStyle(style);
  });
});
