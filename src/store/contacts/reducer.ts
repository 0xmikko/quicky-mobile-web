/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import {createDataLoaderReducer} from "redux-data-connect";
import {CONTACTS_PREFIX} from "./";
import {Contact} from "../../entities/contactEntity";

export default createDataLoaderReducer<Contact>(CONTACTS_PREFIX);
