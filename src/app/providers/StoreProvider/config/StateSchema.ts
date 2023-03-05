import {
  Reducer,
  AnyAction,
  CombinedState,
  EnhancedStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { rtkApi } from '@shared/api/rtkApi';
import { listState } from '@entities/List/model/types/listTypes';
import { modeSelectionState } from '@features/ModeSelection/model/types/modeSelectionTypes';

export interface StateSchema {
  list: listState,
  modeSelection: modeSelectionState,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  remove: (key: StateSchemaKey) => void;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
  extra: ThunkExtraArg;
}
