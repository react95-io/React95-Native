import React from 'react';
import { render } from '@testing-library/react-native';

import { Fieldset, Text } from '../..';

describe('<Fieldset />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Fieldset testID='fieldset'>
        <Text>Banana dance</Text>
      </Fieldset>,
    );

    expect(getByTestId('fieldset')).toHaveTextContent('Banana dance');
  });

  it('should render custom styles', () => {
    const style = { backgroundColor: 'teal' };

    const { getByTestId } = render(
      <Fieldset testID='fieldset' style={style}>
        <Text>Fieldset</Text>
      </Fieldset>,
    );

    expect(getByTestId('fieldset')).toHaveStyle(style);
  });

  describe('prop: label', () => {
    it('should render label', () => {
      const { getByText } = render(<Fieldset label='Something:' />);

      expect(getByText('Something:')).toBeTruthy();
    });
  });

  describe('prop: labelStyle', () => {
    it('should render custom label styles', () => {
      const style = { backgroundColor: 'teal' };

      const { getByText } = render(
        <Fieldset label='Something:' labelStyle={style} />,
      );

      expect(getByText('Something:')).toHaveStyle(style);
    });
  });
});
