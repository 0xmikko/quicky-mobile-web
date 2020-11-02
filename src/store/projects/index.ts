/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {EntityType} from '../../core/appEntity';
import {RootState} from '../index';

export const ENTITY_TYPE: EntityType = 'Project';
export const PROJECTS_PREFIX = ENTITY_TYPE.toUpperCase() + '_';

export const projectsListSelector = (state: RootState) =>
  state.projects.List.data;

export const projectDetailsSelector = (id: string) => (state: RootState) =>
  state.projects.Details.data[id]?.data;
