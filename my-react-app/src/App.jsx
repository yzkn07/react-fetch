import React, { useState } from 'react';
import { Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import FootballAPI from './Components/FootballAPI';
import JSONPlaceholderAPI from './Components/JSONPlaceholderAPI';

function App() {
  const [selectedAPI, setSelectedAPI] = useState('');

  const handleChange = (event) => {
    setSelectedAPI(event.target.value);
  };

  return (
    <Container>
      <FormControl fullWidth margin="normal">
        <InputLabel id="api-select-label">Select API</InputLabel>
        <Select
          labelId="api-select-label"
          value={selectedAPI}
          onChange={handleChange}
        >
          <MenuItem value="football">Football API</MenuItem>
          <MenuItem value="jsonPlaceholder">JSON Placeholder API</MenuItem>
        </Select>
      </FormControl>
      {selectedAPI === 'football' && <FootballAPI />}
      {selectedAPI === 'jsonPlaceholder' && <JSONPlaceholderAPI />}
    </Container>
  );
}

export default App;
