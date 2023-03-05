import {
	MenuItem,
	InputLabel,
	FormControl,
	Select as MUISelect,
} from '@mui/material';
import { memo, useState } from 'react';

import { Mode } from '@shared/types';
import { defaultMode } from '@shared/consts';

interface SelectProps {
	modes: Mode[];
	label?: string;
	selectMode: Mode;
	setSelectMode: (mode: Mode) => void;
}

export const Select = memo((props: SelectProps) => {
	const {
		modes,
		setSelectMode,
		label = 'Pick mode',
		selectMode: { name },
	} = props;
	const { name: defaultName } = defaultMode;

	return (
		<FormControl sx={{ mr: 1, minWidth: 190, textAlign: 'start' }}>
			<InputLabel>{label}</InputLabel>
			<MUISelect label={label} value={name}>
				<MenuItem
					value={defaultName}
					onClick={() => setSelectMode(defaultMode)}
				>
					{defaultName}
				</MenuItem>
				{modes.map(({ name, field }, index) => (
					<MenuItem
						key={index}
						value={name}
						onClick={() => setSelectMode({ name, field })}
					>
						{name}
					</MenuItem>
				))}
			</MUISelect>
		</FormControl>
	);
});
