/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import {
  ColorButton,
  Menu,
  ColorPicker,
  Divider,
  Button,
  Window,
  Text,
} from 'react95-native';

import Container from '../util/Container';
import ExamplePanel from '../util/ExamplePanel';

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

  const [secondColorMenuOpen, setSecondColorMenuOpen] = React.useState(false);
  const [secondColor, setSecondColor] = React.useState(colors[6]);
  const [tempSecondColor, setTempSecondColor] = React.useState(secondColor);

  const handleTempSecondColorChange = (value: string) => {
    setTempSecondColor(value);
  };

  const handleSecondColorApply = () => {
    setSecondColor(tempSecondColor);
    setSecondColorMenuOpen(false);
  };
  const handleSecondColorCancel = () => {
    setTempSecondColor(secondColor);
    setSecondColorMenuOpen(false);
  };

  return (
    <ExamplePanel variant='clear' disableScroll>
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
            <View style={{ padding: 4 }}>
              <ColorPicker
                onChange={handleColorChange}
                value={color}
                colors={colors}
                colorsPerRow={5}
              />
            </View>
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
          <ColorButton
            onPress={() => setSecondColorMenuOpen(!secondColorMenuOpen)}
            color={secondColor}
          />
        </View>
      </Container.Section>

      {secondColorMenuOpen && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pointerEvents='box-none'
        >
          <Window title='Colors' onClose={handleSecondColorCancel}>
            <View style={{ padding: 8 }}>
              <Text style={{ marginVertical: 8, fontSize: 16 }}>
                Basic colors:
              </Text>
              <ColorPicker
                onChange={handleTempSecondColorChange}
                value={tempSecondColor}
                wide
                colors={colors}
                colorsPerRow={5}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: 8,
                }}
              >
                <Button
                  style={{
                    marginRight: 2,
                    flex: 1,
                  }}
                  onPress={handleSecondColorCancel}
                >
                  Cancel
                </Button>
                <Button
                  style={{
                    flex: 1,
                  }}
                  onPress={handleSecondColorApply}
                >
                  Ok
                </Button>
              </View>
            </View>
          </Window>
        </View>
      )}
    </ExamplePanel>
  );
};

export default ColorPickerExample;
