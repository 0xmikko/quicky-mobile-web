/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React, {useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {contactsListSelector} from '../../store/contacts';
import {DataListView} from 'rn-mobile-components/lib/DataListView';
import {ContactListItem} from '../../containers/Contacts/ContactListItem';
import {SafeAreaView, View} from 'react-native';
import {commonStyles} from '../../styles';
import {Text, SearchBar} from 'react-native-elements';
import {ContactDataManager} from "../../entities/contactEntity";

export function ContactsListScreen(): React.ReactElement {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const data = useSelector(contactsListSelector);

  const [search, setSearch] = useState('');

  const filteredData =
      search === '' ? data : ContactDataManager.search(data, search);


  const getList = (opHash: string) => {
    dispatch(actions.contacts.getList(opHash));
  };

  const onSelect = async (id: string) => {
    navigation.navigate('ContactDetailsScreen', {id});
  };

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View>
        <Text h1>Contacts</Text>
      </View>
      <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
          lightTheme={true}
          round={true}
          // containerStyle={{backgroundColor: 'red'}}
          // text={search}
          // searchBarStyle={'minimal'}
      />
      <DataListView
        data={filteredData || []}
        getList={getList}
        renderItem={ContactListItem}
        onSelect={onSelect}
      />
    </SafeAreaView>
  );
}
