/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';
import {contactDetailsSelector,} from '../../store/contacts';
import {ContactDetailsView} from '../../containers/Contacts/ContactDetailsView';
import {ContactsStackParamList} from './ContactsStack';
import actions from '../../store/actions';
import {DataDetailsView} from 'rn-mobile-components/lib/DataDetailsView';

type ContactDetailsScreenRouteProp = RouteProp<
  ContactsStackParamList,
  'ContactDetailsScreen'
>;

export function ContactDetailsScreen(): React.ReactElement {
  const dispatch = useDispatch();

  const route = useRoute<ContactDetailsScreenRouteProp>();
  const {id} = route.params;

  const getDetails = (opHash: string) => {
    dispatch(actions.contacts.getDetails(id, opHash));
  };
  const data = useSelector(contactDetailsSelector(id));

  return (
    <DataDetailsView
      data={data}
      getDetails={getDetails}
      renderItem={ContactDetailsView}
    />
  );
}
