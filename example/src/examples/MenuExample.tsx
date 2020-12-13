/* eslint-disable no-console */
import React from 'react';
import { Menu, Divider } from 'react95-native';

import Container from '../util/Container';

const TextExample = () => {
  return (
    <Container>
      <Container.Section title='Basic usage'>
        <Menu>
        <Menu.Item primary onPress={() => console.warn('Item 1')} title='Item 1' />

          <Menu.Item
            size='lg'
            onPress={() => console.warn('Item 2')}
            title='Item 2'
          />
          <Menu.Item
            size='lg'
            onPress={() => console.warn('Item 3')}
            title='Item 3'
          />
          <Divider size='auto' />
          <Menu.Item
            size='lg'
            disabled
            onPress={() => console.warn('Disabled Item')}
            title='Disabled Item'
          />
        </Menu>
        <Menu orientation='horizontal'>
          <Menu.Item onPress={() => console.warn('Item 2')} title='Item 2' />
          <Menu.Item onPress={() => console.warn('Item 3')} title='Item 3' />
          <Divider orientation='vertical' variant='raised' size='auto' />
          <Menu.Item
            disabled
            onPress={() => console.warn('Disabled Item')}
            title='Disabled Item'
          />
        </Menu>
      </Container.Section>
    </Container>
  );
};

export default TextExample;
