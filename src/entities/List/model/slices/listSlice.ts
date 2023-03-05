import {  PayloadAction } from "@reduxjs/toolkit";

import { buildSlice } from '@shared/store';
import { ListItem, listState } from '@entities/List/model/types/listTypes';

const initialState: listState = {
	hoveredSquaresList: [],
}

export const listSlice = buildSlice({
	name: 'list',
	initialState,
	reducers: {
		handleList(state, action: PayloadAction<ListItem>) {
			const index = state.hoveredSquaresList.findIndex(obj => obj.id === action.payload.id);
			if (index !== -1) {
				state.hoveredSquaresList.splice(index, 1);
			} else {
				state.hoveredSquaresList = [action.payload, ...state.hoveredSquaresList];
			}
		},
		setListDefault(state) {
			state.hoveredSquaresList = [];
		}
	},
});

export const {
	reducer: listReducer,
	actions: listActions,
	useActions: useListActions
} = listSlice;
