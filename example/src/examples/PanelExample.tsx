import React from 'react';
import { StyleSheet } from 'react-native';
import { Panel, Text } from 'react95-native';

import Container from '../util/Container';

const PanelExample = () => {
  return (
    <Container>
      <Panel variant='raised' style={[styles.panel, { padding }]}>
        <Text>
          Notice the subtle difference in borders. The lightest border is not on
          the edge of this panel.
        </Text>
        <Panel variant='default' style={{ padding, margin }}>
          <Text>
            This panel on the other hand has the lightest border on the edge.
            Use this panel inside &apos;raised&apos; panels.
          </Text>
          <Panel
            variant='cutout'
            background='canvas'
            style={{ padding, marginTop: margin, height: 100 }}
          >
            <Text>Put some content here</Text>
          </Panel>
        </Panel>
        <Panel variant='well' style={{ marginTop: margin, padding: 4 }}>
          <Text>Also often used as a footer.</Text>
        </Panel>
      </Panel>
    </Container>
  );
};

// TODO: fox paddings

const defaultSpacing = 12;
const margin = defaultSpacing;
const padding = defaultSpacing;

const styles = StyleSheet.create({
  panel: {
    marginBottom: margin,
    padding,
  },
});

export default PanelExample;
