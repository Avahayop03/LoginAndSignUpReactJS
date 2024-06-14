import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function PatientMedication() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/dashboard/patientMed/edit');
  };

  const handleSearch = (event) => {
    // Implement search functionality here
    const searchQuery = event.target.value;
    console.log('Searching for:', searchQuery);
    // You can perform further actions based on the searchQuery
  };

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
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div style={{ marginBottom: '16px', width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <h2 style={{ margin: 0, marginRight: 'auto' }}>Patient Medication</h2>
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
        {/* Other content related to patient medication */}
      </Paper>
    </div>
  );
}
