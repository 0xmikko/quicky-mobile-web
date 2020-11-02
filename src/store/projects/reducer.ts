/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {createDataLoaderReducer} from "redux-data-connect";
import {PROJECTS_PREFIX} from "./";
import {Project} from "../../entities/projectEntity";

export default createDataLoaderReducer<Project>(PROJECTS_PREFIX);
