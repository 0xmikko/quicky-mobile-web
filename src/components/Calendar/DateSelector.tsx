/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import moment from 'moment';
import {
  DAY_DURATION,
  getMonday,
  isTheSameDay,
  setBeginOfDay,
} from '../../helpers/time';

export interface DateSelectorProps {
  date: number;
  onChange: (newDate: number) => void;
}

export function DateSelector({
  date,
  onChange,
}: DateSelectorProps): React.ReactElement {
  // Set startDate as previous Monday
  const startDate = getMonday(setBeginOfDay(date));

  // Choose month and year for header from the first weekday
  const month = moment(startDate).format('MMMM, YYYY');
  const daysRendered: Array<React.ReactElement> = [];
  daysRendered.push(<View style={styles.day} />);

  for (let i = 0; i < 7; i++) {
    const day = startDate + i * DAY_DURATION;
    const isSelectedDate = isTheSameDay(date, day);

    daysRendered.push(
      <View
        style={{
          flex: 1,
          height: 30,
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: isSelectedDate ? 'orange' : 'white',
        }}
        key={`${i}-View`}>
        {' '}
        <TouchableOpacity onPress={() => onChange(day)}>
          <Text>{moment(day).format('DD')}</Text>
        </TouchableOpacity>
      </View>,
    );
    daysRendered.push(<View style={styles.day} key={`${i}-Divider`} />);
  }

  return (
    <View>
      <View style={styles.monthLine}>
        <TouchableOpacity onPress={() => onChange(date - 7 * DAY_DURATION)}>
          <Text>&larr;</Text>
        </TouchableOpacity>
        <Text h4>{month}</Text>
        <TouchableOpacity onPress={() => onChange(date + 7 * DAY_DURATION)}>
          <Text>&rarr;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dayLine}>{daysRendered}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  day: {
    borderRightWidth: 1,
    borderColor: '#000',
  },
  dayLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  monthLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'white',
  },
});
