/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Field} from "./field";
import {EntityType} from "./types";

export interface AppEntity {
    name: string;

    icon: string;

    type: EntityType;

    order: number;

    schema: Record<string, Field>;

    additionalFields: Array<string>;

    isDeployed: boolean;

    dataMapper: Record<string, Field>;
}
