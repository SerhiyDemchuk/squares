import { memo } from 'react';
import styled from '@emotion/styled';

interface ListItemProps {
  row: number;
  col: number;
}

const Wrapper = styled('div')(() => ({
  backgroundColor: '#f5ebae',
  color: '#887247',
  borderRadius: 8,
  display: 'flex',
  margin: '5px 0',
  padding: '0 10px',
  '&:first-of-type': {
    marginTop: 0,
  }
}));


export const ListItem = memo(({ col, row }: ListItemProps) => {
  return (
    <Wrapper>
      <h5> row {row} col {col}</h5>
    </Wrapper>
  );
});
