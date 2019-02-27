// @flow
import React from 'react';
import { FlatList, Text } from 'react-native';
import { Reservation } from '../types/Reservation';

type Props = {
  data: Array<Reservation>,
  fetchMore: (options: any) => void,
  refetch: () => void,
  networkStatus: number,
  renderItem: (item: Reservation) => any,
};

const InfiniteDataList = (props: Props) => {
  const {
    data, fetchMore, refetch, networkStatus, renderItem,
  } = props;

  if (!data || data.length === 0) {
    return <Text>No Reservations.</Text>;
  }
  return (
    <FlatList
      data={data}
      refreshing={networkStatus === 4}
      onRefresh={() => refetch()}
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item.id}
    />
  );
};

export default InfiniteDataList;
