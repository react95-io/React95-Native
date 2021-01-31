import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Panel, ScrollView } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const loremIpsum =
  'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself';
const TextInputExample = () => {
  return (
    <ExamplePanel style={styles.container} disableScroll padding={4}>
      <Panel variant='cutout' background='material'>
        <ScrollView small>
          <View style={{ padding: 16 }}>
            <Text style={styles.label}>Default:</Text>
            <TextInput defaultValue={loremIpsum} />
            <TextInput
              disabled
              defaultValue={loremIpsum}
              style={[{ marginTop: 20 }]}
            />

            <Text style={styles.label}>Empty:</Text>
            <TextInput defaultValue='' placeholder='Placeholder text here...' />
            <TextInput
              disabled
              defaultValue=''
              placeholder='Placeholder text here...'
              style={[{ marginTop: 20 }]}
            />

            <Text style={styles.label}>Multiline:</Text>
            <TextInput
              multiline
              style={[{ height: 120 }]}
              defaultValue={loremIpsum}
            />
            <TextInput
              disabled
              multiline
              style={[{ height: 120, marginTop: 20 }]}
              defaultValue={loremIpsum}
            />

            <Panel
              variant='cutout'
              background='canvas'
              style={{ padding: 16, marginTop: 16 }}
            >
              <Text style={styles.label}>Default:</Text>
              <TextInput variant='flat' defaultValue={loremIpsum} />
              <TextInput
                variant='flat'
                disabled
                defaultValue={loremIpsum}
                style={[{ marginTop: 20 }]}
              />
              <TextInput
                variant='flat'
                defaultValue=''
                placeholder='Placeholder text here...'
                style={[{ marginTop: 20 }]}
              />
              <TextInput
                variant='flat'
                disabled
                defaultValue=''
                placeholder='Placeholder text here...'
                style={[{ marginTop: 20 }]}
              />

              <Text style={styles.label}>Multiline:</Text>
              <TextInput
                variant='flat'
                multiline
                style={[{ height: 120 }]}
                defaultValue={loremIpsum}
              />
              <TextInput
                variant='flat'
                disabled
                multiline
                style={[{ height: 120, marginTop: 20 }]}
                defaultValue={loremIpsum}
              />
            </Panel>
          </View>
        </ScrollView>
      </Panel>
    </ExamplePanel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 6,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default TextInputExample;
