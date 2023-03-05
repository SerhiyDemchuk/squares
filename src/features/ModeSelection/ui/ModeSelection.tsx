import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { memo, FormEvent, useState } from 'react';

import { Mode } from '@shared/types';
import { Button, Select } from '@shared/ui';
import { defaultMode } from '@shared/consts';
import { useGetModesQuery } from '@shared/api/rtkApi';
import { useListActions } from '@entities/List/model/slices/listSlice';
import { useModeSelectionActions } from '@/features/ModeSelection/model/slices/modeSelectionSlice';
import { getModeSelectionMode } from '@/features/ModeSelection/model/selectors/modeSelectors';

export const ModeSelection = memo(() => {
	const { data, isLoading } = useGetModesQuery();
	const { setMode } = useModeSelectionActions();
	const [selectMode, setSelectMode] = useState<Mode>(defaultMode);
	const { setListDefault } = useListActions();
	const currentMode = useSelector(getModeSelectionMode);
	const disableButton = currentMode.name === selectMode.name;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setMode(defaultMode);
		setListDefault();
		setMode(selectMode);
	}

	if (isLoading) {
		return <h1>LOADING...</h1>;
	}

	return (
		<Stack sx={{ display: 'flex', flexDirection: 'row', marginBottom: 3 }}>
			<form onSubmit={handleSubmit}>
				<Select modes={data} setSelectMode={setSelectMode} selectMode={selectMode} />
				<Button type='submit' text="Start" disabled={disableButton} />
			</form>
		</Stack>
	);
});
