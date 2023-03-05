import {
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { $api } from '@shared/api/api';
import { rtkApi } from '@shared/api/rtkApi';
import { StateSchema } from '@app/providers/StoreProvider';
import { listReducer } from '@entities/List/model/slices/listSlice';
import { ThunkExtraArg } from '@app/providers/StoreProvider/config/StateSchema';
import { modeSelectionReducer } from '@features/ModeSelection/model/slices/modeSelectionSlice';

export function createReduxStore(
  initialState?: StateSchema,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    list: listReducer,
    modeSelection: modeSelectionReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
