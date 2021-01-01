import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import type { $RemoveChildren, Color } from '../types';

import { Button, Divider } from '..';
import { ThemeContext } from '../common/theming/Theme';

const dropdownSymbol = {
  default:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGgWRF/7GYCjYE3SRkhXA5bNaBFKKIk+wmnB4lyiQAAsgDCqkPxTcAAAAASUVORK5CYII=',
  disabled:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANklEQVQoU2NkIAIwEqGGgTRFLa0t/9FNramuARuCYhKyQpgCDEUgAZBCZAVYFWHzCGkOxxcUANHnDAplQ9G1AAAAAElFTkSuQmCC',
};

type Props = $RemoveChildren<typeof Button> & {
  color?: Color;
};

const previewHeight = 20;

const ColorButton = ({ disabled, color, ...rest }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Button variant='outside' disabled={disabled} {...rest}>
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
        <Image
          style={styles.dropdownIcon}
          source={{
            uri: dropdownSymbol[disabled ? 'disabled' : 'default'],
          }}
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
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: -4,
    marginLeft: 1,
  },
});

export default ColorButton;
