export interface ListItem {
	col: number;
	row: number;
	id: number;
}

export interface listState {
	hoveredSquaresList: ListItem[],
}