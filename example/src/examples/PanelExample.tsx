import React from 'react';
import { StyleSheet } from 'react-native';

import { Container } from './common';

import { Panel, Text } from '../../../src';
import themes from '../../../src/common/themes';

const PanelExample = () => {
  return (
    <Container>
      <Text style={styles.label}>Usage:</Text>
      <Panel variant='outside' style={[styles.panel, { padding }]}>
        <Text>
          Notice the subtle difference in borders. The lightest border is not on
          the edge of this panel.
        </Text>
        <Panel variant='default' style={{ padding, margin }}>
          <Text>
            This panel on the other hand has the lightest border on the edge.
            Use this panel inside &apos;outside&apos; panels.
          </Text>
          <Panel variant='well' style={{ padding, marginTop: margin }}>
            <Text>
              This panel on the other hand has the lightest border on the edge.
              Use this panel inside &apos;outside&apos; panels.
            </Text>
          </Panel>
        </Panel>
        <Panel variant='well' style={{ marginTop: margin, padding: 4 }}>
          <Text>
            The &apos;well&apos; variant of a panel is often used as a window
            footer.
          </Text>
        </Panel>
      </Panel>

      <Text style={styles.label}>Variants:</Text>
      <Panel variant='default' style={styles.panel}>
        <Text>default</Text>
      </Panel>

      <Panel variant='well' style={styles.panel}>
        <Text>well</Text>
      </Panel>

      <Panel variant='outside' style={styles.panel}>
        <Text>outside</Text>
      </Panel>
    </Container>
  );
};

const defaultSpacing = 12;
const margin = defaultSpacing;
const padding = defaultSpacing;

const styles = {
  panel: {
    marginBottom: margin,
    padding
  },
  label: {
    color: themes.borderLightest,
    marginBottom: 4
  }
};

export default PanelExample;
