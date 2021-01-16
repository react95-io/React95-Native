import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { testId } from '../Panel/Panel';
import { AppBar, Text } from '../..';

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

describe('<AppBar.Content />', () => {
  it('should render custom styles', () => {
    const style = { marginTop: 42 };

    const { getByTestId } = render(
      <AppBar>
        <AppBar.Content title='Title' style={style} testID='content' />
      </AppBar>,
    );

    expect(getByTestId('content')).toHaveStyle(style);
  });
  describe('title', () => {
    it('should render title', () => {
      const { getByText } = render(
        <AppBar>
          <AppBar.Content title='Title' />
        </AppBar>,
      );

      expect(getByText('Title')).toBeTruthy();
    });

    it('should pass styles to title', () => {
      const style = { color: 'red' };
      const { getByText } = render(
        <AppBar>
          <AppBar.Content title='Title' titleStyle={style} />
        </AppBar>,
      );

      expect(getByText('Title')).toHaveStyle(style);
    });
  });

  describe('subtitle', () => {
    it('should render subtitle', () => {
      const { getByText } = render(
        <AppBar>
          <AppBar.Content title='Title' subtitle='Subtitle' />
        </AppBar>,
      );

      expect(getByText('Subtitle')).toBeTruthy();
    });

    it('should pass styles to subtitle', () => {
      const style = { color: 'red' };
      const { getByText } = render(
        <AppBar>
          <AppBar.Content
            title='Title'
            subtitle='Subtitle'
            subtitleStyle={style}
          />
        </AppBar>,
      );

      expect(getByText('Subtitle')).toHaveStyle(style);
    });
  });

  describe('prop: onPress', () => {
    it('should handle onPress', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <AppBar>
          <AppBar.Content
            testID='content'
            onPress={onPress}
            title='Title'
            subtitle='Subtitle'
          />
        </AppBar>,
      );

      fireEvent(getByTestId('content'), 'press');
      expect(onPress).toHaveBeenCalled();
    });
  });
});

describe('<AppBar.BackAction />', () => {
  it('should render custom styles', () => {
    const style = { marginTop: 42 };

    const { getByTestId } = render(
      <AppBar>
        <AppBar.BackAction testID='backAction' style={style} />
      </AppBar>,
    );

    expect(getByTestId('backAction')).toHaveStyle(style);
  });

  describe('prop: onPress', () => {
    it('should handle onPress', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <AppBar>
          <AppBar.BackAction testID='backAction' onPress={onPress} />
        </AppBar>,
      );

      fireEvent(getByTestId('backAction'), 'press');
      expect(onPress).toHaveBeenCalled();
    });
  });
});
