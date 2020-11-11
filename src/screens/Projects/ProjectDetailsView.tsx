/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Project} from '../../entities/project';
import {commonStyles} from '../../styles';
import {CircleButtonProps} from '../../components/CircleButtons/CircleButton';
import {CircleButtonBlock} from '../../components/CircleButtons/CircleButtonBlock';
import {DataListItem} from '../../components/DataListItem';
import {DetailsViewComponentProps} from "../../core/types";

export function ProjectDetailsView({
  data,
}: DetailsViewComponentProps<Project>): React.ReactElement {
  console.log('DATA', data);
  const actions: Array<CircleButtonProps> = [
    {icon: 'message', title: 'Call'},
    {icon: 'call', title: 'Chat'},
    {icon: 'mail', title: 'Mail'},
  ];
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View style={{alignItems: 'center', paddingTop: '20px', width: '100%'}}>
        <Text h2 style={{marginTop: '15px', paddingBottom: '15px'}}>
          {data.name}
        </Text>
        <CircleButtonBlock data={actions} />
      </View>
      <View style={{marginTop: '25px'}}>
        <DataListItem
          name={'Starting date'}
          value={data.startDate.toString()}
        />
        <DataListItem
          name={'Finishing date'}
          value={data.finishDate.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
