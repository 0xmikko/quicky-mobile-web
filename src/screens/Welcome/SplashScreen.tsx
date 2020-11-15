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

export const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();
  const app = useSelector(appSelector);

  const onLoginPressed = () => {
    Analytics.sendEvent('APP LOGIN', app.name);
  };

  return (
    <View
      style={{
        ...commonStyles.safeAreaContainerCentered,
        backgroundColor: app.splashBackground || '#0b1535',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
      }}>
      {/*<ImageBackground source={require('../../assets/background.jpg')} style={styles.image} >*/}
      <ScaledImage
        source={{uri: app.logoUrl}}
        height={200}
        // style={{
        //   height: 220,
        //   resizeMode: 'contain',
        //   marginBottom: 28,
        //   marginTop: -40,
        // }}
      />
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
          onPress={onLoginPressed}
          type="outline"
          buttonStyle={{borderColor: '#FFF'}}
          titleStyle={{color: '#FFF'}}
        />
      </View>
      {/*</ImageBackground>*/}
    </View>
  );
};

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
