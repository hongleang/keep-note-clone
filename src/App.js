import * as React from 'react';

import { Box, Container } from "@mui/material";

import { Note } from "./components";
import { NoteLayout } from "./layouts";

export default function App() {
  return (
    <Container  maxWidth="xl">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Note />
        </Box>
      </Container>
      L
    </Container>
  );
}
