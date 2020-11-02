/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {EntityType} from '../../core/appEntity';
import {RootState} from '../index';

export const ENTITY_TYPE: EntityType = 'Contact';
export const CONTACTS_PREFIX = ENTITY_TYPE.toUpperCase() + '_';

export const contactsListSelector = (state: RootState) =>
  state.contacts.List.data;

export const contactDetailsSelector = (id: string) => (state: RootState) =>
  state.contacts.Details.data[id]?.data;
