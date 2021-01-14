/* eslint-disable no-console */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Panel, Card } from 'react95-native';

import Container from '../util/Container';
import ExamplePanel from '../util/ExamplePanel';

const ButtonExample = () => {
  return (
    <ExamplePanel>
      <Container.Section title='Default'>
        <View style={styles.buttonWrapper}>
          <Button
            primary
            variant='default'
            onLongPress={() => console.warn('onLongPress')}
            onPress={() => console.warn('onPress')}
          >
            Primary
          </Button>
          <Button variant='default' onPress={() => console.warn('Pressed')}>
            Default
          </Button>
          <Button
            active
            variant='default'
            onPress={() => console.warn('Pressed')}
          >
            Active
          </Button>
          <Button
            variant='default'
            disabled
            onPress={() => console.warn('Pressed')}
          >
            Disabled
          </Button>
          <Button onPress={() => console.warn('Pressed')} square>
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title=''>
        <View style={styles.buttonWrapper}>
          <Button
            primary
            variant='outside'
            onPress={() => console.warn('Pressed')}
          >
            Primary
          </Button>
          <Button variant='outside' onPress={() => console.warn('Pressed')}>
            Default
          </Button>
          <Button
            active
            variant='outside'
            onPress={() => console.warn('Pressed')}
          >
            Active
          </Button>
          <Button
            variant='outside'
            disabled
            onPress={() => console.warn('Pressed')}
          >
            Disabled
          </Button>
          <Button
            variant='outside'
            onPress={() => console.warn('Pressed')}
            square
          >
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title=''>
        <View style={styles.buttonWrapper}>
          <Button
            primary
            variant='default'
            onPress={() => console.warn('Pressed')}
          >
            Primary
          </Button>
          <Button
            primary
            variant='default'
            onPress={() => console.warn('Pressed')}
          >
            Default
          </Button>
          <Button
            primary
            active
            variant='default'
            onPress={() => console.warn('Pressed')}
          >
            Active
          </Button>
          <Button
            primary
            variant='default'
            disabled
            onPress={() => console.warn('Pressed')}
          >
            Disabled
          </Button>
          <Button primary onPress={() => console.warn('Pressed')} square>
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title='Menu'>
        <Panel style={{ padding: 12 }}>
          <Button variant='menu' onPress={() => console.warn('Pressed')}>
            Menu
          </Button>

          <Button active variant='menu' onPress={() => console.warn('Pressed')}>
            Active
          </Button>

          <Button
            variant='menu'
            disabled
            onPress={() => console.warn('Pressed')}
          >
            Disabled
          </Button>
        </Panel>
      </Container.Section>

      <Container.Section title='Flat'>
        <Card>
          <Card.Content
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 40,
            }}
          >
            <Button
              primary
              variant='flat'
              onPress={() => console.warn('Pressed')}
            >
              Primary
            </Button>
            <Button variant='flat' onPress={() => console.warn('Pressed')}>
              Default
            </Button>
            <Button
              variant='flat'
              disabled
              onPress={() => console.warn('Pressed')}
            >
              Disabled
            </Button>
          </Card.Content>
        </Card>
      </Container.Section>
    </ExamplePanel>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});
