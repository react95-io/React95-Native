import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, themes } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

const FABExample = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <ExamplePanel>
        <View style={styles.row}>
          <FAB
            uppercase
            small
            // icon={<Text>Default:</Text>}
            onPress={() => setVisible(!visible)}
            style={styles.fab}
            theme={themes.azureOrange}
          />
          <FAB
            uppercase
            // icon={<Text>Default:</Text>}
            // onPress={() => setVisible(!visible)}
            onPress={() => {}}
            visible={visible}
            style={styles.fab}
            theme={themes.candy}
          />
          <FAB
            uppercase
            // icon={<Text>Default:</Text>}
            label='Extended FAB'
            // onPress={() => setVisible(!visible)}
            onPress={() => {}}
            visible={visible}
            style={styles.fab}
            theme={themes.olive}
          />
          <FAB
            uppercase
            disabled
            // icon={<Text>Default:</Text>}
            label='Disabled FAB'
            // onPress={() => setVisible(!visible)}
            onPress={() => {}}
            visible={visible}
            style={styles.fab}
            theme={themes.olive}
          />
          <FAB
            loading
            // icon={<Text>Default:</Text>}
            label='Loading FAB'
            // onPress={() => setVisible(!visible)}
            onPress={() => {}}
            visible={visible}
            style={styles.fab}
            theme={themes.olive}
          />
        </View>
      </ExamplePanel>
    </>
  );
};

export default FABExample;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    marginTop: 16,
  },
  fabAbsolute: {
    position: 'absolute',
    zIndex: 9999,
  },
});
