import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Desktop, Fieldset } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const DesktopExample = () => {
  return (
    <ExamplePanel>
      <Fieldset label='Default:' style={[{ paddingVertical: 20 }]}>
        <Desktop screenStyle={[{ backgroundColor: 'teal' }]} />
      </Fieldset>
      <Fieldset label='With children:' style={[{ paddingVertical: 20 }]}>
        <Desktop>
          <View style={[styles.child]} />
        </Desktop>
      </Fieldset>
    </ExamplePanel>
  );
};

const styles = StyleSheet.create({
  child: {
    backgroundColor: 'pink',
    flex: 1,
  },
});

export default DesktopExample;
