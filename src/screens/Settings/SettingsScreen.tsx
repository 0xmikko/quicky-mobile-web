/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {useDispatch} from 'react-redux';
import {Alert, View} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {ScaledImage} from '../../components/ScaledImage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import actions from '../../store/actions';

export const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const list = [
    {
      title: 'Privacy settings',
      icon: 'credit-card',
      action: () => Alert.alert('Sorry', 'This feature is not developed yet'),
    },
    {
      title: 'Notifications',
      icon: 'notifications-none',
      action: () => Alert.alert('Sorry', 'This feature is not developed yet'),
    },
  ];

  return (
    <>
      <View>
        <Text h1>Settings</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <ScaledImage source={{uri: '/logo_purple.png'}} height={200} />
        <Text style={{marginTop: 5, fontSize: 18, fontWeight: 'bold'}}>
          Quicky for Quick Base&reg;
        </Text>
        <Text style={{marginBottom: 15}}>ver 1.0</Text>
      </View>
      <View>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={<Icon name={item.icon} size={20} />}
            bottomDivider
            chevron
            onPress={item.action}
          />
        ))}
      </View>
      <View style={{marginTop: 30}}>
        <ListItem
          key={'logout'}
          title={'Logout'}
          bottomDivider
          leftIcon={<Icon name={'exit-to-app'} size={20} color={'red'} />}
          onPress={() => dispatch(actions.auth.logout())}
          containerStyle={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
          titleStyle={{
            color: 'red',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </>
  );
};
