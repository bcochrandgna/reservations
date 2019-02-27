import { StyleSheet } from 'react-native';
import { standardMargin, standardBold } from '..';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  labelText: {
    fontWeight: standardBold,
  },
  valueText: {
    marginLeft: standardMargin,
  },
});
