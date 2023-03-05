import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';

import { Square } from '@shared/ui';
import { getModeSelectionMode } from '@/features/ModeSelection/model/selectors/modeSelectors';

const Row = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	flexDirection: 'column',
	borderTop: '1px solid #1f1f1f',
	'&:last-child': {
		borderRight: '1px solid #1f1f1f',
	}
}));

export const Board = memo(() => {
	const { field } = useSelector(getModeSelectionMode);

	const board = [];
	let id = 0;
	for (let colIndex = 1; colIndex <= field; colIndex++) {
		const cols = [];
		for (let rowIndex = 1; rowIndex <= field; rowIndex++) {
			id++
			cols.push(
				<Square
					id={id}
					key={id}
					rowIndex={rowIndex}
					colIndex={colIndex}
				/>
			);
		}
		board.push(
			<Row key={colIndex}>
				{cols}
			</Row>
		);
	}

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-start', }}>
			{board}
		</Box>
	);
});
