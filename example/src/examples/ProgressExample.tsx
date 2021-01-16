import React, { useState, useEffect } from 'react';
import { Progress, Fieldset } from 'react95-native';

import ExamplePanel from '../util/ExamplePanel';

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
    <ExamplePanel>
      <Fieldset label='Default' style={[{ padding: 20 }]}>
        <Progress percent={percent} background='canvas' />
      </Fieldset>
      <Fieldset label='Tile' style={[{ padding: 20 }]}>
        <Progress variant='tile' percent={percent} />
      </Fieldset>
    </ExamplePanel>
  );
};

export default DividerExample;
