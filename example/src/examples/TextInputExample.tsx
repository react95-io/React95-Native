import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Panel, Fieldset, Cutout, ScrollView } from 'react95-native';

const loremIpsum =
  'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself';
const TextInputExample = () => {
  return (
    <Panel style={styles.container}>
      <Cutout background='material'>
        <ScrollView>
          <View style={{ padding: 16 }}>
            <Fieldset label='Default' style={[styles.fieldset]}>
              <TextInput defaultValue={loremIpsum} />
              <TextInput
                disabled
                defaultValue={loremIpsum}
                style={[{ marginTop: 20 }]}
              />
            </Fieldset>
            <Fieldset label='Empty' style={[styles.fieldset]}>
              <TextInput
                defaultValue=''
                placeholder='Placeholder text here...'
              />
              <TextInput
                disabled
                defaultValue=''
                placeholder='Placeholder text here...'
                style={[{ marginTop: 20 }]}
              />
            </Fieldset>
            <Fieldset label='Multiline' style={[styles.fieldset]}>
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
            </Fieldset>

            <Cutout style={{ padding: 20 }}>
              <Fieldset
                variant='flat'
                label='Default'
                style={[styles.fieldset]}
              >
                <TextInput variant='flat' defaultValue={loremIpsum} />
                <TextInput
                  variant='flat'
                  disabled
                  defaultValue={loremIpsum}
                  style={[{ marginTop: 20 }]}
                />
              </Fieldset>
              <Fieldset variant='flat' label='Empty' style={[styles.fieldset]}>
                <TextInput
                  variant='flat'
                  defaultValue=''
                  placeholder='Placeholder text here...'
                />
                <TextInput
                  variant='flat'
                  disabled
                  defaultValue=''
                  placeholder='Placeholder text here...'
                  style={[{ marginTop: 20 }]}
                />
              </Fieldset>
              <Fieldset
                variant='flat'
                label='Multiline'
                style={[styles.fieldset]}
              >
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
              </Fieldset>
            </Cutout>
          </View>
        </ScrollView>
      </Cutout>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  fieldset: {
    padding: 20,
  },
});

export default TextInputExample;
