import './App.css'
import { List } from '@entities/List';
import { styled } from '@mui/material';

import { BoardGenerator } from '@features/BoardGenerator';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

function App() {
  return (
    <Wrapper>
      <BoardGenerator />
      <List />
    </Wrapper>
  )
}

export default App
