/*
 * Lunachat - sattelite chat based on NuCypher
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useEffect, useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ContactList} from '../../containers/Contacts/ContactList';
import {useNavigation} from '@react-navigation/native';
import {operationSelector} from 'redux-data-connect';
import {DataScreen} from 'rn-mobile-components';
import {contactsListSelector} from '../../store/contacts';

export function ContactsListScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hash, setHash] = useState('0');

  const data = useSelector(contactsListSelector);
  const operation = useSelector(operationSelector(hash));

  const getList = () => {
    const newHash = Date.now().toString();
    dispatch(actions.contacts.getList(newHash));
    setHash(newHash);
  };

  useEffect(() => {
    getList();
  }, []);

  const onSelect = async (id: string) => {
    navigation.navigate('ContactsDetailsScreen', {id});
  };

  return (
    <DataScreen
      data={data || []}
      status={operation?.status}
      component={ContactList}
      onSelect={onSelect}
      onRefresh={() => getList()}
    />
  );
}
