/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {createDataLoaderReducer} from "redux-data-connect";
import {CONTACTS_PREFIX} from "./";
import {Contact} from "../../entities/contactEntity";

export default createDataLoaderReducer<Contact>(CONTACTS_PREFIX);
