import React from 'react';
import { View, Text } from 'react-native';
import i18n from '../helpers/i18n';
import styles from '../styles/components/CreateReservationHeader';

const CreateReservationHeader = () => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{i18n.t('create_reservation')}</Text>
  </View>
);

export default CreateReservationHeader;
