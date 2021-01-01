/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import {
  ColorButton,
  Menu,
  ColorPicker,
  Divider,
  Button,
} from 'react95-native';

import Container from '../util/Container';

const colors = [
  'white',
  'black',
  '#bdbebd',
  '#7a7d7b',
  '#ff0102',
  '#7c0000',
  '#feff00',
  '#7c7d04',
  '#00ff00',
  '#077d04',
  '#0afeff',
  '#067d7b',
  '#1402ff',
  '#05007b',
  '#ff01ff',
  '#7a037b',
  '#cdaeb4',
  '#9b5d6a',
  '#e5d6de',
  '#9c9d9d',
];

const ColorPickerExample = () => {
  const [colorMenuOpen, setColorMenuOpen] = React.useState(true);
  const [color, setColor] = React.useState(colors[3]);

  const handleColorChange = (value: string) => {
    setColor(value);
    setColorMenuOpen(false);
  };
  return (
    <Container>
      <Container.Section title='Default'>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Menu
            open={colorMenuOpen}
            anchor={
              <ColorButton
                onPress={() => setColorMenuOpen(state => !state)}
                color={color}
              />
            }
          >
            <ColorPicker
              onChange={handleColorChange}
              value={color}
              colors={colors}
              colorsPerRow={5}
            />
            <Divider style={{ marginVertical: 4 }} />
            <Button
              disabled
              style={{
                margin: 2,
              }}
            >
              Other...
            </Button>
          </Menu>
          <ColorButton color='red' disabled />
        </View>
      </Container.Section>
    </Container>
  );
};

export default ColorPickerExample;
