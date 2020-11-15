/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {commonStyles} from '../../styles';
import actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ScaledImage} from '../../components/ScaledImage';
import {appSelector} from '../../store/app';
import {Analytics} from 'rc-analytics';

export function SplashScreen(): React.ReactElement {
  const app = useSelector(appSelector);

  return (
    <View
      style={{
        ...commonStyles.safeAreaContainerCentered,
        backgroundColor: app.splashBackground || '#763e9a',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
      }}>
      <ScaledImage source={{uri: app.logoUrl}} height={200} />
      <View style={{marginTop: 30, alignItems: 'center'}}>
        <Text style={{color: app.splashTitleColor || 'white', fontSize: 36}}>
          {app.splashTitle}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: app.splashSubtitleColor || '#ffeb83',
            marginTop: 8,
          }}>
          {app.splashSubtitle}
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Login / Signup"
          onPress={() => {}}
          type="outline"
          buttonStyle={{borderColor: '#FFF'}}
          titleStyle={{color: '#FFF'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    paddingTop: 50,
    borderColor: '#ffeb83',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
