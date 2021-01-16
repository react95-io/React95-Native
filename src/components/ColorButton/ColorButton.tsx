import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import type { $RemoveChildren, Color } from '../../types';

import { Button, Divider, ArrowIcon } from '../..';
import { ThemeContext } from '../../styles/theming/Theme';

type Props = $RemoveChildren<typeof Button> & {
  color?: Color;
};

const previewHeight = 20;

const ColorButton = ({ disabled, color, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Button variant='raised' disabled={disabled} {...rest}>
      <View style={styles.row}>
        <View
          style={[
            styles.colorPreview,
            {
              backgroundColor: color || 'transparent',
              borderWidth: 2,
              borderColor: disabled
                ? theme.materialTextDisabled
                : theme.materialText,
              shadowColor: disabled
                ? theme.materialTextDisabledShadow
                : 'transparent',
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 1,
              shadowRadius: 0,
            },
          ]}
        />
        <Divider orientation='vertical' size={previewHeight} />
        <ArrowIcon
          direction='down'
          disabled={disabled}
          segments={3}
          style={styles.dropdownIcon}
        />
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  colorPreview: {
    width: 36,
    marginRight: 6,
  },
  dropdownIcon: {
    alignSelf: 'center',
    marginRight: 2,
    marginLeft: 4,
  },
});

export default ColorButton;
