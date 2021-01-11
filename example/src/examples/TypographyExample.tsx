import React from 'react';
import { Text, Title, Anchor, Fieldset } from 'react95-native';

import { StyleSheet } from 'react-native';
import ExamplePanel from '../util/ExamplePanel';

const TypographyExample = () => {
  return (
    <ExamplePanel>
      <Fieldset label='Text component:'>
        <Text style={styles.example}>Default text</Text>
        <Text bold style={styles.example}>
          Bold text
        </Text>
        <Text disabled style={styles.example}>
          Disabled text
        </Text>
        <Text secondary style={styles.example}>
          Secondary text
        </Text>
      </Fieldset>

      <Fieldset label='Title component:'>
        <Title style={styles.example}>Default title</Title>
        <Title bold align='left' style={styles.example}>
          Bold title
        </Title>
        <Title disabled align='right' style={styles.example}>
          Disabled title
        </Title>
        <Title secondary style={styles.example}>
          Secondary title
        </Title>
      </Fieldset>

      <Fieldset label='Anchor component:'>
        <Anchor style={styles.example}>Default anchor</Anchor>
        <Anchor underline style={styles.example}>
          Underlined anchor
        </Anchor>
      </Fieldset>
    </ExamplePanel>
  );
};

export default TypographyExample;

const styles = StyleSheet.create({
  example: {
    marginVertical: 8,
  },
});
