import { StyleSheet } from 'react-native';
import {
  borderColor,
  normalTextColor,
  mediumTextSize,
  titleTextColor,
  cardBackgroundColor,
  standardMargin,
  standardPadding,
  cardShadedColor,
} from '..';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor,
    marginHorizontal: standardMargin,
    marginBottom: standardMargin,
    backgroundColor: cardBackgroundColor,
  },
  dateText: {
    color: normalTextColor,
    marginLeft: standardMargin,
  },
  titleText: {
    fontSize: mediumTextSize,
    color: titleTextColor,
  },
  titleContainer: {
    padding: standardPadding,
  },
  bottomContainer: {
    marginTop: standardMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: cardShadedColor,
    padding: standardPadding,
  },
});
