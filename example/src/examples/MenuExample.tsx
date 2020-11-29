import React from 'react';
import { View } from 'react-native';
import { Menu, MenuItem, Divider } from 'react95-native';

import Container from '../util/Container';

const TextExample = () => {
  return (
    <Container>
      <Container.Section title='Basic usage'>
        <View>
          <Menu>
            <MenuItem
              size='lg'
              onPress={() => console.warn('Item 1')}
              title='Item 1'
            />

            <MenuItem
              size='lg'
              onPress={() => console.warn('Item 2')}
              title='Item 2'
            />
            <Divider size='auto' />
            <MenuItem
              size='lg'
              disabled
              onPress={() => console.warn('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
        </View>
        <View>
          <Menu orientation='horizontal'>
            <MenuItem onPress={() => console.warn('Item 1')} title='Item 1' />

            <MenuItem onPress={() => console.warn('Item 2')} title='Item 2' />
            <Divider orientation='vertical' variant='raised' />
            <MenuItem
              disabled
              onPress={() => console.warn('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
        </View>
      </Container.Section>
    </Container>
  );
};

export default TextExample;
