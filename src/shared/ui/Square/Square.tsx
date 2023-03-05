import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { memo, useState } from 'react';

import { useListActions } from '@entities/List/model/slices/listSlice';

interface SquareProps {
  id: number;
  rowIndex: number;
  colIndex: number;
}

const Wrapper = styled(Box)(() => ({
  padding: 15,
  borderBottom: '1px solid #1f1f1f',
  borderLeft: '1px solid #1f1f1f',
}));

export const Square = memo((props: SquareProps) => {
  const {
    id,
    rowIndex,
    colIndex,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { handleList } = useListActions();
  const handleColor = () => {
    setIsHovered(!isHovered);
    handleList({ col: colIndex, row: rowIndex, id });
  }
  return (
    <Wrapper
      onMouseOver={handleColor}
      sx={{ background: isHovered ? '#6ba6ff' : 'white'}}
    />
  );
});
