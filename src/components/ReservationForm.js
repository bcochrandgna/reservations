// @flow
import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import styles from '../styles/components/ReservationForm';
import { Reservation } from '../types/Reservation';
import i18n from '../helpers/i18n';

type Props = {
  onUpdate: (reservation: Reservation) => Promise<void>,
};
type State = {
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string,
};

class ReservationForm extends PureComponent<Props, State> {
  state = {
    name: '',
    hotelName: '',
    arrivalDate: moment()
      .add(1, 'days')
      .format('MM/DD/YYYY'),
    departureDate: moment()
      .add(2, 'days')
      .format('MM/DD/YYYY'),
  };

  handleSavePress = () => {
    const {
      name, hotelName, arrivalDate, departureDate,
    } = this.state;
    const { onUpdate } = this.props;

    onUpdate({
      id: null,
      name,
      hotelName,
      arrivalDate,
      departureDate,
    });
  };

  handleTextChange = (field: string, text: string) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    const {
      name, hotelName, arrivalDate, departureDate,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          style={styles.inputContainer}
          value={name}
          onChangeText={text => this.handleTextChange('name', text)}
        />
        <Text>Hotel Name</Text>
        <TextInput
          style={styles.inputContainer}
          value={hotelName}
          onChangeText={text => this.handleTextChange('hotelName', text)}
        />
        <Text>Arrival Date</Text>
        <DatePicker
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          date={arrivalDate}
          mode="date"
          showIcon={false}
          onDateChange={date => this.handleTextChange('arrivalDate', date)}
          style={styles.dateContainer}
          customStyles={{
            dateInput: styles.dateInput,
          }}
        />
        <Text>Departure Date</Text>
        <DatePicker
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          date={departureDate}
          mode="date"
          showIcon={false}
          onDateChange={date => this.handleTextChange('departureDate', date)}
          style={styles.dateContainer}
          customStyles={{
            dateInput: styles.dateInput,
          }}
        />
        <Button title={i18n.t('create_reservation')} onPress={this.handleSavePress} />
      </View>
    );
  }
}

export default ReservationForm;
