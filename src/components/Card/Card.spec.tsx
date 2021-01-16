import React from 'react';
import { render } from '@testing-library/react-native';

import { Card, Text } from '../..';

describe('<Card />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Card>
        <Text>Banana dance</Text>
      </Card>,
    );

    expect(getByText('Banana dance')).toBeTruthy();
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(
      <Card style={style} testID='card'>
        <Text>Card</Text>
      </Card>,
    );

    expect(getByTestId('card')).toHaveStyle(style);
  });
});

describe('<Card.Content />', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Card>
        <Card.Content>
          <Text>Banana dance</Text>
        </Card.Content>
      </Card>,
    );

    expect(getByText('Banana dance')).toBeTruthy();
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(
      <Card>
        <Card.Content style={style} testID='content' />
      </Card>,
    );

    expect(getByTestId('content')).toHaveStyle(style);
  });
});
