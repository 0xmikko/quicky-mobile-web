/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React, {useState} from 'react';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {projectsListSelector} from '../../store/projects';
import {DataListView} from 'rn-mobile-components/lib/DataListView';
import {ProjectListItem} from '../../containers/Projects/ListItem';
import {SafeAreaView, View} from 'react-native';
import {commonStyles} from '../../styles';
import {Text, SearchBar} from 'react-native-elements';
import {ProjectDataManager} from "../../entities/projectEntity";

export function ProjectsListScreen(): React.ReactElement {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const data = useSelector(projectsListSelector);

  const [search, setSearch] = useState('');

  const filteredData =
      search === '' ? data : ProjectDataManager.search(data, search);


  const getList = (opHash: string) => {
    dispatch(actions.projects.getList(opHash));
  };

  const onSelect = async (id: string) => {
    navigation.navigate('ProjectDetailsScreen', {id});
  };

  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View>
        <Text h1>Projects</Text>
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
        renderItem={ProjectListItem}
        onSelect={onSelect}
      />
    </SafeAreaView>
  );
}
