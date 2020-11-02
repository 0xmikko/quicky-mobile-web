import React from 'react';
import {EntityType} from "./appEntity";
import {ContactsStack} from "../screens/Contacts/ContactsStack";
import {SettingsStack} from "../screens/Settings/SettingsStack";

export const stacks : Record<EntityType, () => React.ReactElement> = {
    Contact: ContactsStack,
    Settings: SettingsStack,
}
