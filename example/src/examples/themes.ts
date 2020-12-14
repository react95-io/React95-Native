import { themes } from 'react95-native';

const {
  original,
  rainyDay,
  spruce,
  rose,
  coldGray,
  counterStrike,
  lilac,
  olive,
  tokyoDark,
  plum,
  matrix,
  travel,
  ...otherThemes
} = themes;

const reorderedThemes = {
  original,
  rainyDay,
  spruce,
  rose,
  coldGray,
  counterStrike,
  lilac,
  olive,
  tokyoDark,
  plum,
  matrix,
  travel,
  ...otherThemes,
};

export default Object.values(reorderedThemes);
