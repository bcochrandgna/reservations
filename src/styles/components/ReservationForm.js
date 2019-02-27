import { StyleSheet } from 'react-native';
import { standardPadding, standardMargin, borderColor } from '..';

export default StyleSheet.create({
  container: {
    padding: standardPadding,
    margin: standardMargin,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    marginVertical: standardMargin,
    padding: standardPadding,
    paddingBottom: standardPadding * 2,
  },
  dateContainer: {
    margin: 0,
    marginBottom: standardMargin,
    width: '100%',
  },
  dateInput: {
    margin: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    alignItems: 'flex-start',
    padding: standardPadding,
  },
});
