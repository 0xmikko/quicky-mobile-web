/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Field} from "./field";

export type EntityTemplate = "Contact" | "Task" | "Project" | "Deal";

export interface AppEntity {
    name: string;

    icon: string;

    template: EntityTemplate;

    schema: Map<string, Field>;

    additionalFields: Array<string>;
}
