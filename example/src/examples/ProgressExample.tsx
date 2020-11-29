import React from 'react';
import { Panel, Progress, Fieldset } from 'react95-native';

const DividerExample = () => {
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Fieldset label='Default' style={[{ padding: 20 }]}>
        <Progress percent={50} />
      </Fieldset>
      <Fieldset label='Tile' style={[{ padding: 20 }]}>
        <Progress variant='tile' percent={50} />
      </Fieldset>
    </Panel>
  );
};

export default DividerExample;
