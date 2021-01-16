import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { Theme, $RemoveChildren, Color } from '../../types';
import { withTheme } from '../../core/theming';

import { Button, Divider, ArrowIcon } from '../..';

type Props = $RemoveChildren<typeof Button> & {
  color?: Color;
  theme: Theme;
};

const previewHeight = 20;

const ColorButton = ({ disabled, color, theme, ...rest }: Props) => {
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
          theme={theme}
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

export default withTheme(ColorButton);
