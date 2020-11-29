import React, { useState, useEffect } from 'react';
import { Panel, Progress, Fieldset } from 'react95-native';

const DividerExample = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Panel style={{ flex: 1, padding: 20 }}>
      <Fieldset label='Default' style={[{ padding: 20 }]}>
        <Progress percent={percent} />
      </Fieldset>
      <Fieldset label='Tile' style={[{ padding: 20 }]}>
        <Progress variant='tile' percent={percent} />
      </Fieldset>
    </Panel>
  );
};

export default DividerExample;
