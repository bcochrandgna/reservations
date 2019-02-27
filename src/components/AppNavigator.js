import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ReservationList from '../screens/ReservationList';
import CreateReservation from '../screens/CreateReservation';

const MainNavigator = createBottomTabNavigator({
  reservationList: {
    screen: ReservationList,
  },
  createReservation: {
    screen: CreateReservation,
  },
});

export default createAppContainer(MainNavigator);
