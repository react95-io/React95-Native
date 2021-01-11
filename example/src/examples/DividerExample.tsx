import React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const DividerExample = () => {
  return (
    <ExamplePanel>
      <Text>Default:</Text>
      <View style={{ paddingVertical: 20 }}>
        <Divider size={130} />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Divider orientation='vertical' size={130} />
      </View>

      <Text>Raised:</Text>
      <View style={{ paddingVertical: 20 }}>
        <Divider variant='raised' size='75%' />
      </View>
      <View
        style={{ paddingVertical: 20, display: 'flex', flexDirection: 'row' }}
      >
        <Divider variant='raised' orientation='vertical' size={130} />
        <Divider variant='raised' orientation='vertical' size={130} />
      </View>
    </ExamplePanel>
  );
};

export default DividerExample;
