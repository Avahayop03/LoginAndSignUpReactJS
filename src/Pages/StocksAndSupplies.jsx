import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const StocksAndSupplies = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/dashboard/addStocks'); // Example route, adjust as needed
  };

  const handleSearch = (event) => {
    // Implement search functionality here
    const searchQuery = event.target.value;
    console.log('Searching for:', searchQuery);
    // You can perform further actions based on the searchQuery
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: 'auto', marginTop: '20vh', marginBottom: '20vh' }}>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: 'green',
            '&:hover': {
              backgroundColor: 'darkgreen'
            },
            marginRight: '8px' // Add margin-right for gap
          }}
          onClick={() => {
            // Add functionality for Surgical and Non-Surgical category
          }}
        >
          Surgical and Non-Surgical
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: 'green',
            '&:hover': {
              backgroundColor: 'darkgreen'
            },
            marginLeft: '8px' // Add margin-left for gap
          }}
          onClick={() => {
            // Add functionality for Pharmaceutical category
          }}
        >
          Pharmaceutical
        </Button>
      </div>
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
        onClick={handleAddClick}
      >
        Add
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
          <div style={{ borderBottom: '3px solid black', width: '100%', display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Stocks and Supplies</h2>
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
          </div>
        </div>
        {/* Add more content related to stocks and supplies */}
      </Paper>
    </div>
  );
};

export default StocksAndSupplies;
