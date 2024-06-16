<<<<<<< HEAD
import {Table, TableHead, TableRow, TableCell, 
        TableContainer, Paper, TableBody, Button, Box, Typography} from '@mui/material';


const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};
export default function CurrentInPatient() {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={verticalLine}>Patient Number</TableCell>
        <TableCell sx={verticalLine}>Patient Name</TableCell>
        <TableCell sx={verticalLine}>Ward Name</TableCell>
        <TableCell sx={verticalLine}>Bed Number</TableCell>
        <TableCell sx={verticalLine}><Typography sx={{textAlign:'center', fontSize:'14px'}}>Action</Typography></TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell sx={verticalLine}>Row 1, Cell 1</TableCell>
        <TableCell sx={verticalLine}>Row 1, Cell 2</TableCell>
        <TableCell sx={verticalLine}>Row 1, Cell 3</TableCell>
        <TableCell sx={verticalLine}>Row 1, Cell 3</TableCell>
        <TableCell sx={verticalLine}>
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Button 
               color="error"
               sx={{
                    width: '150px',
                    backgroundColor: '#0288d1',
                    '&:hover': { backgroundColor: '#193b4d' },
                    borderRadius: '5px',
                    color: 'white',
                    mb: 1,
                   
                    fontSize: '0.70rem',
                    }}>Discharge</Button>
            </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={verticalLine}>Row 2, Cell 1</TableCell>
            <TableCell sx={verticalLine}>Row 2, Cell 2</TableCell>
            <TableCell sx={verticalLine}>Row 2, Cell 3</TableCell>
            <TableCell sx={verticalLine}>Row 2, Cell 3</TableCell>
            <TableCell sx={verticalLine}>
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Button 
               color="error"
               sx={{
                    width: '150px',
                    backgroundColor: '#0288d1',
                    '&:hover': { backgroundColor: '#193b4d' },
                    borderRadius: '5px',
                    color: 'white',
                    mb: 1,
                   
                    fontSize: '0.70rem',
                    }}>Discharge</Button>
            </Box>
            </TableCell>
          </TableRow>
          
  
      
    </TableBody>
    
  </Table>
  </TableContainer>
=======
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
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
  );
}
