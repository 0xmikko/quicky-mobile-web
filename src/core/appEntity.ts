/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Field} from "./field";

export type EntityType = "Contact" | "Settings";

export interface AppEntity {
    name: string;

    icon: string;

    template: EntityType;

    order: number;

    schema: Record<string, Field>;

    additionalFields: Array<string>;

    isDeployed: boolean;

    dataMapper: Record<string, Field>;
}
