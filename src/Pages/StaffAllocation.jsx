<<<<<<< HEAD
import React, { useState } from 'react';
import {
  Paper,
  Button,
  Container,
  TextField,
  InputAdornment,
  Divider,
  Box,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
=======
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function StaffAllocation() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility
=======

  const handleEditClick = () => {
    navigate('/dashboard/staffAlloc/edit');
  };
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4

  const handleSearch = (event) => {
    // Implement search functionality here
    const searchQuery = event.target.value;
    console.log('Searching for:', searchQuery);
    // You can perform further actions based on the searchQuery
  };

<<<<<<< HEAD
  const handleEditClick = () => {
    setOpenDialog(true); // Open dialog for editing
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close dialog
  };

  const handleSave = () => {
    // Implement save functionality for the dialog form
    console.log('Saving changes...');
    handleCloseDialog(); // Close dialog after saving
  };

  return (
    <Container maxWidth="false" sx={{ mt: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            width: '150px',
            padding: '12px 24px',
            backgroundColor: 'green',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </Box>
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box
            style={{
              marginBottom: '16px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Typography sx={{ m: 0, mr: 'auto', fontSize: '20px' }}>Staff Assignment</Typography>
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{ borderRadius: 1, ml: 'auto' }} // Move to the right
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  ml: 2,
                  borderRadius: 2, // Adding borderRadius
                },
              }}
              onChange={handleSearch}
            />
          </Box>
          <Divider sx={{ mb: 50 }} />
          {/* Other content related to staff assignment */}
        </Paper>
      </Grid>

      {/* Dialog for Edit functionality */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Edit Staff Assignment</DialogTitle>
        <DialogContent>
          {/* Add form fields or content for editing */}
          <TextField fullWidth variant="outlined" label="Staff Name" defaultValue="John Doe" sx={{ mt:2, mb: 2 }} />
          <TextField fullWidth variant="outlined" label="Department" defaultValue="IT Department" sx={{ mb: 2 }} />
          <TextField fullWidth variant="outlined" label="Role" defaultValue="Developer" sx={{ mb: 2 }} />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: 'green', color: 'white' }}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
=======
  return (
    <div style={{ position: 'relative', width: '80%', margin: 'auto', marginTop: '20vh', marginBottom: '20vh' }}>
      <Button 
        variant="contained" 
        sx={{ 
          position: 'absolute', 
          top: '-60px', 
          right: '20px', 
          padding: '12px 24px', 
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: 'darkgreen'
          }
        }}
        onClick={handleEditClick}
      >
        Edit
      </Button>
      <Paper 
        elevation={3} 
        style={{ 
          padding: '24px', 
          textAlign: 'center', 
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'relative'
        }}
      >
        <div style={{ marginBottom: '16px', width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <h2 style={{ margin: 0, marginRight: 'auto' }}>Staff Assignment</h2>
          <TextField
            variant="outlined"
            placeholder="Search"
            sx={{ borderRadius: 1, ml: 'auto' }} // Move to the right
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                ml: 2, borderRadius: 2, // Adding borderRadius
              },
            }}
            onChange={handleSearch}
          />
          <div 
            style={{ 
              position: 'absolute', 
              left: 0, 
              right: 0, 
              bottom: '-4px',
              height: '3px',
              backgroundColor: 'black'
            }}
          />
        </div>
        {/* Other content related to staff assignment */}
      </Paper>
    </div>
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
  );
}
