/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {ContactsStack} from "../screens/Contacts/ContactsStack";
import {SettingsStack} from "../screens/Settings/SettingsStack";
import {ProjectsStack} from "../screens/Projects/ProjectsStack";
import {EntityType} from "../core/types";

export const stacks : Record<EntityType, () => React.ReactElement> = {
    Contact: ContactsStack,
    Project: ProjectsStack,
    Setting: SettingsStack,
}
