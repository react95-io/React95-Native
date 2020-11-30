import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Desktop, Panel, Fieldset } from 'react95-native';

const DesktopExample = () => {
  return (
    <Panel style={styles.container}>
      <Fieldset label='Default:' style={[{ paddingVertical: 20 }]}>
        <Desktop style={[{ backgroundColor: 'teal' }]} />
      </Fieldset>
      <Fieldset label='With children:' style={[{ paddingVertical: 20 }]}>
        <Desktop>
          <View style={[styles.child]} />
        </Desktop>
      </Fieldset>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  child: {
    backgroundColor: 'pink',
    flex: 1,
  },
});

export default DesktopExample;
