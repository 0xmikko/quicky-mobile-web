/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import {Project} from '../../entities/project';
import {ListItemComponentProps} from '../../core/types';

export function ProjectListItem({
  data,
  onSelect,
}: ListItemComponentProps<Project>): React.ReactElement {
  const title = data.name;

  return (
    <TouchableOpacity onPress={() => onSelect(data.id.toString())}>
      <ListItem bottomDivider>
        <Icon name={'ios-briefcase-outline'} type={'ionicon'} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{data.status}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
}
