/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';
import {projectDetailsSelector} from '../../store/projects';
import {ProjectDetailsView} from '../../containers/Projects/DetailsView';
import {ProjectsStackParamList} from './ProjectsStack';
import actions from '../../store/actions';
import {DataDetailsView} from 'rn-mobile-components/lib/DataDetailsView';

type ProjectDetailsScreenRouteProp = RouteProp<
  ProjectsStackParamList,
  'ProjectDetailsScreen'
>;

export function ProjectDetailsScreen(): React.ReactElement {
  const dispatch = useDispatch();

  const route = useRoute<ProjectDetailsScreenRouteProp>();
  const {id} = route.params;

  const getDetails = (opHash: string) => {
    dispatch(actions.projects.getDetails(id, opHash));
  };
  const data = useSelector(projectDetailsSelector(id));

  return (
    <DataDetailsView
      data={data}
      getDetails={getDetails}
      renderItem={ProjectDetailsView}
    />
  );
}
