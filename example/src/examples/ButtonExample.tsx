/* eslint-disable no-console */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Panel, Card } from 'react95-native';
import { notificationService } from '../util/notifications';

import Container from '../util/Container';
import ExamplePanel from '../util/ExamplePanel';

const ButtonExample = () => {
  const sharedProps = {
    onLongPress: () => notificationService.send({ message: 'onLongPress' }),
    onPress: () => notificationService.send({ message: 'onPress' }),
    style: {
      marginRight: 8,
      marginBottom: 8,
    },
  };
  return (
    <ExamplePanel>
      <Container.Section title='Default'>
        <View style={styles.buttonWrapper}>
          <Button primary variant='default' {...sharedProps}>
            Primary
          </Button>
          <Button variant='default' {...sharedProps}>
            Default
          </Button>
          <Button active variant='default' {...sharedProps}>
            Active
          </Button>
          <Button variant='default' disabled {...sharedProps}>
            Disabled
          </Button>
          <Button {...sharedProps} square>
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title=''>
        <View style={styles.buttonWrapper}>
          <Button primary variant='raised' {...sharedProps}>
            Primary
          </Button>
          <Button variant='raised' {...sharedProps}>
            Default
          </Button>
          <Button active variant='raised' {...sharedProps}>
            Active
          </Button>
          <Button variant='raised' disabled {...sharedProps}>
            Disabled
          </Button>
          <Button variant='raised' {...sharedProps} square>
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title=''>
        <View style={styles.buttonWrapper}>
          <Button primary variant='default' {...sharedProps}>
            Primary
          </Button>
          <Button primary variant='default' {...sharedProps}>
            Default
          </Button>
          <Button primary active variant='default' {...sharedProps}>
            Active
          </Button>
          <Button primary variant='default' disabled {...sharedProps}>
            Disabled
          </Button>
          <Button primary {...sharedProps} square>
            Ok
          </Button>
        </View>
      </Container.Section>

      <Container.Section title='Menu'>
        <Panel style={{ padding: 12 }}>
          <Button variant='menu' {...sharedProps}>
            Menu
          </Button>

          <Button active variant='menu' {...sharedProps}>
            Active
          </Button>

          <Button variant='menu' disabled {...sharedProps}>
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
              padding: 20,
            }}
          >
            <Button primary variant='flat' {...sharedProps}>
              Primary
            </Button>
            <Button variant='flat' {...sharedProps}>
              Default
            </Button>
            <Button variant='flat' disabled {...sharedProps}>
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
    flexWrap: 'wrap',
    flex: 1,
  },
});
