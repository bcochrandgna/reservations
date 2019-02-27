// @flow
import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from '../styles/components/ReservationCard';
import i18n from '../helpers/i18n';
import LabelValue from './LabelValue';
import { Reservation } from '../types/Reservation';

type Props = {
  reservation: Reservation,
};

const ReservationCard = (props: Props) => {
  const { reservation } = props;

  if (!reservation || !reservation.name) return null;

  const formattedArrivalDate = reservation.arrivalDate
    && moment(new Date(reservation.arrivalDate)).format('dddd, MMMM Do YYYY');
  const formattedDepartureDate = reservation.departureDate
    && moment(new Date(reservation.departureDate)).format('dddd, MMMM Do YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{reservation.name}</Text>
        <Text>{reservation.hotelName}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <LabelValue label={i18n.t('arrival_date')} value={formattedArrivalDate} />
          <LabelValue label={i18n.t('departure_date')} value={formattedDepartureDate} />
        </View>
        <View />
      </View>
    </View>
  );
};

export default ReservationCard;
