import React from 'react';
import { View, Text } from 'react-native';
import { Panel, Divider } from 'react95-native';

const DividerExample = () => {
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Text>Default</Text>
      <View style={{ paddingVertical: 20 }}>
        <Divider size={130} />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Divider orientation='vertical' size={130} />
      </View>

      <Text>Raised</Text>
      <View style={{ paddingVertical: 20 }}>
        <Divider variant='raised' size='75%' />
      </View>
      <View
        style={{ paddingVertical: 20, display: 'flex', flexDirection: 'row' }}
      >
        <Divider variant='raised' orientation='vertical' size={130} />
        <Divider variant='raised' orientation='vertical' size={130} />
      </View>
    </Panel>
  );
};

export default DividerExample;
