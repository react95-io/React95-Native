import React from 'react';
import { View } from 'react-native';
import { Text, Cutout, ScrollView } from 'react95-native';

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

const NumberInputExample = () => {
  return (
    <ExamplePanel>
      <Cutout style={{ height: 200 }}>
        <ScrollView alwaysShowScrollbars>
          <Text>{lorem}</Text>
        </ScrollView>
      </Cutout>
      <Cutout style={{ marginTop: 20 }}>
        <ScrollView alwaysShowScrollbars horizontal>
          <View style={{ width: 1000 }}>
            <Text>{lorem}</Text>
          </View>
        </ScrollView>
      </Cutout>
    </ExamplePanel>
  );
};

export default NumberInputExample;
