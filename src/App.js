import * as React from 'react';

import { Box, Container } from "@mui/material";

import { Note, CreatedNotes } from "./components";
import { NotesLayout } from "./layouts";

import { dummy_notes } from './data/notes';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Note />
        </Box>
      </Container>
      <Container>
        <Box sx={{ mt: 4, width: '100%' }}>
          <NotesLayout >
            <CreatedNotes items={dummy_notes}/>
          </NotesLayout>
        </Box>
      </Container>
    </Container>
  );
}
