// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/components/ErrorIndicator';
import { errorTextColor } from '../styles';

type Props = {
  error: string,
};

const ErrorIndicator = (props: Props) => {
  const { error } = props;
  return (
    <View style={styles.container}>
      <Icon name="error" color={errorTextColor} />
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default ErrorIndicator;
