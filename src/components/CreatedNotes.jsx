import React from 'react'
import { styled } from '@mui/material/styles';

import { Paper, Typography } from '@mui/material';

const CreatedNotes = ({ items = [] }) => {
  const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {items.map((it, i) => <Item key={`${it.title}_${i}`}>
        <Typography variant='h6' sx={{ mb: 3 }}>{it.title}</Typography>
        {it.body}
      </Item>)}
    </>
  )
}

export default CreatedNotes