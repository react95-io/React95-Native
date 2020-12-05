import React, { useState } from 'react';
import { View } from 'react-native';
import { Tabs, Panel, Text } from 'react95-native';

const AppBarExample = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  return (
    <Panel variant='clear' style={[{ flex: 1 }]}>
      <View style={[{ padding: 8 }]}>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab value={0}>Shoes</Tabs.Tab>
          <Tabs.Tab value={1}>Accesories</Tabs.Tab>
          <Tabs.Tab value={2}>Clothing</Tabs.Tab>
        </Tabs>
        <Tabs.Body style={[{ height: 200 }]}>
          <Text>{value}</Text>
        </Tabs.Body>
      </View>

      <View style={[{ padding: 8 }]}>
        <Tabs stretch value={secondValue} onChange={setSecondValue}>
          <Tabs.Tab value={0}>Shoes</Tabs.Tab>
          <Tabs.Tab value={1}>A</Tabs.Tab>
          <Tabs.Tab value={2}>Clothing</Tabs.Tab>
        </Tabs>
        <Tabs.Body style={[{ height: 200 }]}>
          <Text>{secondValue}</Text>
        </Tabs.Body>
      </View>
    </Panel>
  );
};

export default AppBarExample;
