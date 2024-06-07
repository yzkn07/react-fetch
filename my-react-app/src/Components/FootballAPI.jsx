import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

function FootballAPI() {
  const [year, setYear] = useState('');
  const [data, setData] = useState([]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    if (year) {
      axios.get(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`)
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching the Football API data', error);
        });
    }
  }, [year]);

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          value={year}
          onChange={handleYearChange}
        >

          <MenuItem value={2011}>2011</MenuItem>
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          
        </Select>
      </FormControl>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Winner</TableCell>
              <TableCell>Runnerup</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>{item.winner}</TableCell>
                <TableCell>{item.runnerup}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FootballAPI;
