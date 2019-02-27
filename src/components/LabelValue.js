// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/components/LabelValue';

type Props = {
  label: string,
  value: string,
};

const LabelValue = (props: Props) => {
  const { label, value } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{`${label}:`}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

export default LabelValue;
