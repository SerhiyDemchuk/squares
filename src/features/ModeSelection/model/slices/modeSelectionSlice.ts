import {  PayloadAction } from "@reduxjs/toolkit";

import { Mode } from '@shared/types';
import { buildSlice } from '@shared/store';
import { defaultMode } from '@shared/consts';
import { modeSelectionState } from '@features/ModeSelection/model/types/modeSelectionTypes';

const initialState: modeSelectionState = {
	mode: defaultMode
}

export const modeSelectionSlice = buildSlice({
	name: 'modeSelection',
	initialState,
	reducers: {
		setMode(state, action: PayloadAction<Mode>) {
			state.mode = action.payload;
		}
	},
});

export const {
	reducer: modeSelectionReducer,
	actions: modeSelectionActions,
	useActions: useModeSelectionActions
} = modeSelectionSlice;
