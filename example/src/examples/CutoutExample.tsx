import React from 'react';
import { View } from 'react-native';
import { Cutout, Text } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry standard dummy text
ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets
containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of
Lorem Ipsum.`;

const CutoutExample = () => {
  return (
    <ExamplePanel>
      <View style={{ height: 150, marginTop: 16 }}>
        <Cutout>
          <Text style={{ padding: 12 }}>{lorem}</Text>
        </Cutout>
      </View>
      <View style={{ height: 150, marginTop: 8 }}>
        <Cutout background='material'>
          <Text style={{ padding: 12 }}>{lorem}</Text>
        </Cutout>
      </View>
      <View style={{ height: 150, marginTop: 8 }}>
        <Cutout background='materialDark'>
          <Text style={{ padding: 12 }}>{lorem}</Text>
        </Cutout>
      </View>
    </ExamplePanel>
  );
};

export default CutoutExample;
