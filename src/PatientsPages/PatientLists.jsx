import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Box,
  TextField,
  InputAdornment,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};

export default function PatientLists() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWard, setSelectedWard] = useState('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log('Selected Ward:', selectedWard);
    handleCloseDialog();
  };

  return (
    <TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography component="h6" variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
          Patient lists
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search"
          sx={{ ml: 2, borderRadius: 1 }}
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
      <Divider sx={{ mb: 2 }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={verticalLine}>Patient Number</TableCell>
              <TableCell sx={verticalLine}>Patient Name</TableCell>
              <TableCell sx={verticalLine}>Patient's Next of kin</TableCell>
              <TableCell sx={verticalLine}>
                <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={verticalLine}>12345</TableCell>
              <TableCell sx={verticalLine}>John Doe</TableCell>
              <TableCell sx={verticalLine}>12</TableCell>
              <TableCell sx={verticalLine}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button
                    sx={{
                      width: '150px',
                      backgroundColor: '#0288d1',
                      '&:hover': { backgroundColor: '#193b4d' },
                      borderRadius: '5px',
                      color: 'white',
                      mb: 1,
                      fontSize: '0.70rem',
                    }}
                  >
                    Add to outpatient
                  </Button>
                  <Divider orientation="vertical" flexItem sx={{ mx: 2 }} /> {/* Vertical Divider */}
                  <Button
                    sx={{
                      width: '150px',
                      backgroundColor: '#0288d1',
                      '&:hover': { backgroundColor: '#193b4d' },
                      borderRadius: '5px',
                      color: 'white',
                      ml: 1,
                      mb: 1,
                      fontSize: '0.70rem',
                    }}
                    onClick={handleOpenDialog}
                  >
                    Add to waiting list
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            {/* Additional rows can be added here */}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for selecting ward number */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Select Ward Number</DialogTitle>
        <DialogContent>
        
          <Select
          
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 2 }}
          >
            <MenuItem value={1}>Ward 1</MenuItem>
            <MenuItem value={2}>Ward 2</MenuItem>
            <MenuItem value={3}>Ward 3</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: 'green', color: 'white' }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
