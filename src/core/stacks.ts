/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {EntityType} from "./appEntity";
import {ContactsStack} from "../screens/Contacts/ContactsStack";
import {SettingsStack} from "../screens/Settings/SettingsStack";
import {ProjectsStack} from "../screens/Projects/ProjectsStack";

export const stacks : Record<EntityType, () => React.ReactElement> = {
    Contact: ContactsStack,
    Project: ProjectsStack,
    Settings: SettingsStack,
}
