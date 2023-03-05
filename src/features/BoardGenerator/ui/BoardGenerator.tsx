import { memo } from 'react';
import { styled } from '@mui/material';

import { Board } from '@shared/ui';
import { ModeSelection } from '@features/ModeSelection';

const Wrapper = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export const BoardGenerator = memo(() => (
	<Wrapper>
		<ModeSelection />
		<Board />
	</Wrapper>
));
