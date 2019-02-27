// @flow
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Query } from 'react-apollo';
import { Icon } from 'react-native-elements';
import styles from '../styles/screens/ReservationList';
import GET_RESERVATIONS from '../data/queries/getReservations';
import InfiniteDataList from '../components/InfiniteDataList';
import ReservationCard from '../components/ReservationCard';
import ReservationListHeader from '../components/ReservationListHeader';
import ErrorIndicator from '../components/ErrorIndicator';
import GET_SORT_OPTIONS from '../data/queries/getSortOptions';
import i18n from '../helpers/i18n';
import { Reservation } from '../types/Reservation';

type Props = {};
type TabBarIconArguments = {
  tintColor: string,
};

class ReservationList extends PureComponent<Props> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }: TabBarIconArguments) => <Icon name="list" color={tintColor} />,
    title: i18n.t('reservations'),
  };

  renderItem = (item: Reservation) => <ReservationCard reservation={item} />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ReservationListHeader />
        <Query query={GET_SORT_OPTIONS}>
          {({ data: { sortOptions } }) => (
            <Query
              query={GET_RESERVATIONS}
              variables={{
                skip: 0,
                first: 10,
                orderBy: sortOptions,
              }}
              fetchPolicy="cache-and-network"
              notifyOnNetworkStatusChange
            >
              {({
                data, error, networkStatus, fetchMore, refetch,
              }) => {
                const reservations = data && data.reservations;

                if (error) {
                  return <ErrorIndicator error={error.message} />;
                }

                return (
                  <InfiniteDataList
                    data={reservations}
                    networkStatus={networkStatus}
                    fetchMore={() => {
                      fetchMore({
                        variables: {
                          skip: reservations.length,
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                          if (!fetchMoreResult || fetchMoreResult.reservations.length === 0) {
                            return previousResult;
                          }

                          return {
                            reservations: previousResult.reservations.concat(
                              fetchMoreResult.reservations,
                            ),
                          };
                        },
                      });
                    }}
                    renderItem={this.renderItem}
                    refetch={refetch}
                  />
                );
              }}
            </Query>
          )}
        </Query>
      </SafeAreaView>
    );
  }
}

export default ReservationList;
