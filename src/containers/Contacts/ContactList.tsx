/*
 * Lunachat - sattelite chat based on NuCypher
 * Copyright (c) 2020. Mikhail Lazarev
 */

import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Contact} from '../../entities/contactEntity';
import ContactCard from './ContactCard';
import {profileSelector} from '../../store/profile';
import {DataScreenComponentProps} from 'rn-mobile-components';

export function ContactList({
  data,
  onSelect,
}: DataScreenComponentProps<Contact[]>) {
  const [search, setSearch] = useState('');
  const profile = useSelector(profileSelector);

  const otherContactsData = data.filter((elm) => elm.id !== profile.id);
  const filteredData =
    search === ''
      ? otherContactsData
      : otherContactsData.filter(
          (elm) => (elm.firstName + ' ' + elm.lastName).search(search) !== -1,
        );

  return (
    <ScrollView style={styles.container}>
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

      <FlatList
        style={{...styles.container, marginTop: 25}}
        data={filteredData}
        renderItem={(elem) => (
          <ContactCard
            key={elem.item.id}
            data={elem.item}
            selectContact={onSelect!}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 0,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
