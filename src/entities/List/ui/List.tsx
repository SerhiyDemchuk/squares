import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '@shared/ui';
import { Box, styled, Typography } from '@mui/material';
import { getListHoveredSquaresList } from '@entities/List/model/selectors/listSelectors';

const Wrapper = styled('div')(() => ({
	padding: '0 10px',
}));

export const List = memo(() => {
	const squaresHovered = useSelector(getListHoveredSquaresList);

	return (
		<Wrapper>
			<Typography
				variant="h5"
				sx={{
					paddingY: 1,
					marginBottom: 4,
					display: !squaresHovered.length ? 'none' : 'block',
				}}
			>
				Hovered squares {squaresHovered.length}
			</Typography>
			<Box sx={{ height: 400, overflow: 'auto' }}>
				{squaresHovered.map(({ row, col }, index) => (
					<ListItem key={index} row={row} col={col} />
				))}
			</Box>
		</Wrapper>
	);
});
