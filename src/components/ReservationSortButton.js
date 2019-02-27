// @flow
import React, { PureComponent } from 'react';
import { Icon } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';
import { Mutation } from 'react-apollo';
import sortOptions from '../data/constants/reservationSortOptions';
import UPDATE_SORT_OPTIONS from '../data/mutations/updateSortOptions';
import { KeyLabelPair } from '../types/KeyLabelPair';

type Props = {};

class ReservationSortButton extends PureComponent<Props> {
  handleSortChange = async (value: KeyLabelPair, updateSortOptions: (data: any) => any) => {
    const { key } = value;
    await updateSortOptions({
      variables: {
        sortOptions: key,
      },
    });
  };

  render() {
    return (
      <Mutation mutation={UPDATE_SORT_OPTIONS}>
        {updateSortOptions => (
          <ModalSelector
            data={sortOptions}
            onChange={value => this.handleSortChange(value, updateSortOptions)}
          >
            <Icon name="sort" />
          </ModalSelector>
        )}
      </Mutation>
    );
  }
}

export default ReservationSortButton;
