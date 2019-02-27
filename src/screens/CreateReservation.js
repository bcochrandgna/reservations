// @flow
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Mutation } from 'react-apollo';
import { Icon } from 'react-native-elements';
import styles from '../styles/screens/CreateReservation';
import CREATE_RESERVATION from '../data/mutations/createReservation';
import i18n from '../helpers/i18n';
import { Reservation } from '../types/Reservation';
import ReservationForm from '../components/ReservationForm';
import CreateReservationHeader from '../components/CreateReservationHeader';

type Props = {
  navigation: any,
};
type TabBarIconArguments = {
  tintColor: string,
};

class CreateReservation extends PureComponent<Props> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }: TabBarIconArguments) => (
      <Icon name="playlist-add" color={tintColor} />
    ),
    title: i18n.t('create_reservation'),
  };

  handleCreateReservation = (createReservation: (reservation: Reservation) => any) => async (
    reservation: Reservation,
  ) => {
    const { navigation } = this.props;
    await createReservation({
      variables: {
        name: reservation.name,
        hotelName: reservation.hotelName,
        arrivalDate: reservation.arrivalDate,
        departureDate: reservation.departureDate,
      },
    });

    navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CreateReservationHeader />
        <Mutation mutation={CREATE_RESERVATION}>
          {createReservation => (
            <ReservationForm onUpdate={this.handleCreateReservation(createReservation)} />
          )}
        </Mutation>
      </SafeAreaView>
    );
  }
}

export default CreateReservation;
