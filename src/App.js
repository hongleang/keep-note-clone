import * as React from 'react';

import { Box, Container } from "@mui/material";

import { Note } from "./components";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Note/>  
      </Box>
    </Container>
  );
}
