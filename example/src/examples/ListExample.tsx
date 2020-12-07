/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import { Panel, List, Hourglass, Cutout } from 'react95-native';

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
    <Panel style={{ flex: 1, padding: 8, marginBottom: 44 }}>
      <Cutout style={[{ flex: 1, backgroundColor: 'white' }]}>
        <View style={[{ padding: 20 }]}>
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
        <View style={[{ padding: 20 }]}>
          <List.Accordion
            title='Controlled'
            expanded={expanded}
            onPress={handleExpand}
          >
            <List.Section title='Groceries'>
              {items.map(item => (
                <List.Item
                  title={item}
                  onPress={() => console.warn(item)}
                  left={<Hourglass />}
                  key={item}
                />
              ))}
            </List.Section>
          </List.Accordion>
        </View>
      </Cutout>
    </Panel>
  );
};

export default HourglassExample;
