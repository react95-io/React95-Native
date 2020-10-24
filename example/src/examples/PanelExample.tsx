import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, Section } from './common';

import { Panel, Text } from '../../../src';
import themes from '../../../src/common/themes';

const PanelExample = () => {
  return (
    <Container>
      <Section title='Usage:'>
        <Panel variant='outside' style={[styles.panel, { padding }]}>
          <Text>
            Notice the subtle difference in borders. The lightest border is not
            on the edge of this panel.
          </Text>
          <Panel variant='default' style={{ padding, margin }}>
            <Text>
              This panel on the other hand has the lightest border on the edge.
              Use this panel inside &apos;outside&apos; panels.
            </Text>
            <Panel variant='well' style={{ padding, marginTop: margin }}>
              <Text>Put some content here</Text>
            </Panel>
          </Panel>
          <Panel variant='well' style={{ marginTop: margin, padding: 4 }}>
            <Text>Also often used as a footer.</Text>
          </Panel>
        </Panel>
      </Section>

      <Section title='Variants:'>
        <>
          <Panel variant='default' style={styles.panel}>
            <Text>default</Text>
          </Panel>

          <Panel variant='well' style={styles.panel}>
            <Text>well</Text>
          </Panel>

          <Panel variant='outside' style={styles.panel}>
            <Text>outside</Text>
          </Panel>
        </>
      </Section>
    </Container>
  );
};

const defaultSpacing = 12;
const margin = defaultSpacing;
const padding = defaultSpacing;

const styles = StyleSheet.create({
  panel: {
    marginBottom: margin,
    padding
  },
  label: {
    color: themes.borderLightest,
    marginBottom: 4
  }
});

export default PanelExample;
