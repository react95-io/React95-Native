/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import { Menu, Divider, Title, Button } from 'react95-native';
import { notificationService } from '../util/notifications';

import ExamplePanel from '../util/ExamplePanel';

const notify = (message: string) => notificationService.send({ message });
const TextExample = () => {
  const [verticalMenuOpen, setVerticalMenuOpen] = React.useState(true);
  const [horizontalMenuOpen, setHorizontalMenuOpen] = React.useState(true);

  return (
    <ExamplePanel>
      <View
        style={{
          paddingTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View>
          <Menu
            open={verticalMenuOpen}
            anchor={
              <Button
                active={verticalMenuOpen}
                onPress={() => setVerticalMenuOpen(state => !state)}
              >
                Vertical
              </Button>
            }
          >
            <Menu.Item
              size='lg'
              onPress={() => notify('Item 1')}
              title='Item 1'
            />
            <Menu.Item
              size='lg'
              onPress={() => notify('Item 2')}
              title='Item 2'
            />
            <Menu.Item
              size='lg'
              onPress={() => notify('Item 3')}
              title='Item 3'
            />
            <Title>Letters</Title>
            <Menu.Item size='lg' onPress={() => notify('A')} title='A' />
            <Menu.Item size='lg' onPress={() => notify('B')} title='B' />
            <Menu.Item size='lg' onPress={() => notify('C')} title='C' />
            <Divider size='auto' />
            <Menu.Item
              size='lg'
              disabled
              onPress={() => notify('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
        </View>
        <View>
          <Menu
            orientation='horizontal'
            open={horizontalMenuOpen}
            verticalAlignment='above'
            horizontalAlignment='right'
            anchor={
              <Button onPress={() => setHorizontalMenuOpen(state => !state)}>
                Horizontal
              </Button>
            }
          >
            <Menu.Item
              primary
              onPress={() => notify('Item 2')}
              title='Item 2'
            />
            <Menu.Item onPress={() => notify('Item 3')} title='Item 3' />
            <Divider orientation='vertical' variant='raised' size='auto' />
            <Menu.Item
              disabled
              onPress={() => notify('Disabled Item')}
              title='Disabled Item'
            />
          </Menu>
        </View>
      </View>
    </ExamplePanel>
  );
};

export default TextExample;
