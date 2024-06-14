import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, 
    Typography, Divider, Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function CurrentInPatient() {
  return (
    <TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component="h6" variant="h5" color="inherit">
            InPatient Lists
          </Typography>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Discharged
          </Button>
        </Box>
        <TextField
          variant="outlined"
          placeholder="Search"
          sx={{ borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 2, // Adding borderRadius
            },
          }}
        />
      </Box>
      <Divider sx={{ mb: 10 }} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
            <TableCell>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
