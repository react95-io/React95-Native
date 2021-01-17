import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar, Button, useTheme } from 'react95-native';

const SnackbarExample = () => {
  const [visible, setVisible] = React.useState<boolean>(true);

  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.materialDark }]}>
      <Button size='lg' onPress={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
        duration={Snackbar.DURATION_MEDIUM}
      >
        Hi! I am Clippy, your office assistant.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SnackbarExample;
