/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import { List, Hourglass, Panel, ScrollView } from 'react95-native';
import { notificationService } from '../util/notifications';

import ExamplePanel from '../util/ExamplePanel';

const items = [
  'Control Panel',
  'My Documents',
  'Shared Documents',
  'My Computer',
  'My Network Places',
];

const HourglassExample = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpand = () => {
    setExpanded(currentExpanded => !currentExpanded);
  };

  return (
    <ExamplePanel style={{ paddingTop: 6 }} padding={4} disableScroll>
      <Panel
        variant='cutout'
        background='canvas'
        style={[{ flex: 1, backgroundColor: 'white' }]}
      >
        <ScrollView>
          <View style={[{ paddingHorizontal: 16, marginTop: 16 }]}>
            <List.Accordion
              title='Uncontrolled'
              subtitle='subtitle'
              defaultExpanded
            >
              <List.Section title='Groceries'>
                <List.Item title='Vegetables' />
                <List.Item title='Bread' />
                <List.Item title='Meat' />
              </List.Section>
              <List.Divider />
              <List.Section title='Other'>
                <List.Item title='Accesories' />
                <List.Item title='Electronics' />
                <List.Item title='Art' />
              </List.Section>
            </List.Accordion>
          </View>
          <View style={[{ paddingHorizontal: 16, marginTop: 16 }]}>
            <List.Accordion
              title='Controlled'
              expanded={expanded}
              onPress={handleExpand}
            >
              <List.Section title='Groceries'>
                {items.map(item => (
                  <List.Item
                    title={item}
                    onPress={() => notificationService.send({ message: item })}
                    left={<Hourglass />}
                    key={item}
                  />
                ))}
              </List.Section>
            </List.Accordion>
          </View>
        </ScrollView>
      </Panel>
    </ExamplePanel>
  );
};

export default HourglassExample;
