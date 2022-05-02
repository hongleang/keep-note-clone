import React from 'react'
import { styled } from '@mui/material/styles';

import { Paper, Typography } from '@mui/material';

const CreatedNotes = ({ title, body }) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Item >
        <Typography variant='h6' sx={{ mb: 3 }}>{title}</Typography>
        {body}
      </Item>
    </>
  )
}

export default CreatedNotes