import { StateSchema } from '@app/providers/StoreProvider';

export const getModeSelectionMode = (state: StateSchema) => state.modeSelection.mode;
