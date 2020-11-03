/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {
    createDataLoaderReducer,
    DataObjectWithID,
    DETAIL_SUCCESS,
    LIST_SUCCESS,
    updateStatus
} from "redux-data-connect";
import {EntityType} from "./types";
import {Field} from "../core/field";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action, CombinedState, Reducer} from "redux";
import {DataLoaderDetailsState} from "redux-data-connect/lib/dataloader";
import {DataLoaderListState} from "redux-data-connect/lib/dataloader/list";

export class EntityRepository<T extends DataObjectWithID> {
    protected _type: EntityType;
    protected _sampleData: Array<T> = [];

    protected constructor(
        type: EntityType,
    ) {
        this._type = type;
    }

    get prefix(): string {
        return this._type.toUpperCase() + '_';
    }

    getReduxIndex(): string {
        return this._type.toLowerCase() + 's';
    }

    getSampleListData(dataMapper: Record<string, Field>): T[] {
        return this._sampleData;
    }

    getSampleDetailsData(
        dataMapper: Record<string, Field>,
        id: string,
    ): T | undefined {
        for (let elm of this._sampleData) {
            if (elm.id === id) return elm;
        }
        return undefined;
    }

    getListAction(
        opHash: string,
    ): ThunkAction<void, RootState, unknown, Action<string>> {
        return (dispatch, getState) => {
            const app = getState().app;
            const entity = app.entitiesMap[this._type];

            if (!entity.isDeployed) {
                dispatch({
                    type: this.prefix + LIST_SUCCESS,
                    payload: this.getSampleListData(entity.dataMapper),
                });
                dispatch(updateStatus(opHash, 'STATUS.SUCCESS'));

                return;
            }

            throw new Error('Taking real data is not developed yet!');
        };
    }

    getListSelector(): (state: RootState) => T[] {
        // @ts-ignore
        return (state) => state[this.getReduxIndex()].List.data;
    }

    getDetailsAction(
        id: string,
        opHash: string,
    ): ThunkAction<void, RootState, unknown, Action<string>> {
        return (dispatch, getState) => {
            const app = getState().app;
            const entity = app.entitiesMap[this._type];

            if (!entity.isDeployed) {
                dispatch({
                    type: this.prefix + DETAIL_SUCCESS,
                    payload: this.getSampleDetailsData(entity.dataMapper, id),
                });
                dispatch(updateStatus(opHash, 'STATUS.SUCCESS'));

                return;
            }

            throw new Error('Taking real data is not developed yet!');
        };
    }

    getDetailsSelector(id: string): (state: RootState) => T {
        // @ts-ignore
        return (state) => state[this.getReduxIndex()].Details.data[id]?.data;
    }

    getReducer(): Reducer<
        CombinedState<{
            Details: DataLoaderDetailsState<T>;
            List: DataLoaderListState<T>;
        }>
        > {
        return createDataLoaderReducer<T>(this.prefix);
    }
}
