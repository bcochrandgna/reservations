import { StyleSheet } from 'react-native';
import { standardPadding, largeTextSize, headingTextColor } from '..';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: standardPadding,
  },
  titleText: {
    fontSize: largeTextSize,
    color: headingTextColor,
  },
});
