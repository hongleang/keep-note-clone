import * as React from 'react';

import { Box, Container } from "@mui/material";

import { Note, CreatedNotes } from "./components";
import { NotesLayout } from "./layouts";

import { dummy_notes } from './data/notes';

export default function App() {
  const [data, setData] = React.useState(dummy_notes)

  return (
    <Container maxWidth="xl">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Note {...{ data, setData }} />
        </Box>
      </Container>
      <Container>
        <Box sx={{ mt: 4, width: '100%' }}>
          <NotesLayout >
            {data.map(({ body, title, id }, i) => (
              <CreatedNotes key={`${id}_${i}`} {...{ body, title }} />
            ))}
          </NotesLayout>
        </Box>
      </Container>
    </Container>
  );
}
