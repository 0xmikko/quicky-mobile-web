/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {SettingsStack} from '../screens/Settings/SettingsStack';
import {EntityType} from '../core/types';
import {createEntityStack} from '../components/EntityStack';
import {ContactsStack} from "../screens/Contacts/ContracsStack";

export const stacks: Record<EntityType, () => React.ReactElement> = {
  Contact: ContactsStack,
  Project: createEntityStack('Project'),
  Setting: SettingsStack,
};
