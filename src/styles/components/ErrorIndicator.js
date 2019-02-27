import { StyleSheet } from 'react-native';
import { standardPadding, errorTextColor, standardMargin } from '..';

export default StyleSheet.create({
  container: {
    padding: standardPadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    marginLeft: standardMargin,
    color: errorTextColor,
  },
});
