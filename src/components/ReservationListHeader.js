// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import GET_RESERVATIONS_COUNT from '../data/queries/getReservationsCount';
import i18n from '../helpers/i18n';
import styles from '../styles/components/ReservationListHeader';
import ReservationSortButton from './ReservationSortButton';

const ReservationListHeader = () => (
  <View style={styles.container}>
    <Query query={GET_RESERVATIONS_COUNT}>
      {({ data, error, loading }) => {
        const count = loading || error ? 0 : data.reservationsConnection.aggregate.count;
        return <Text style={styles.titleText}>{`${i18n.t('reservations')} (${count})`}</Text>;
      }}
    </Query>
    <ReservationSortButton />
  </View>
);

export default ReservationListHeader;
