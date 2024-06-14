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
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function StocksAndSupplies() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    console.log('Searching for:', searchQuery);
  };

  const handleEditClick = (content) => {
    console.log(content); // You can do something with content here
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
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
            }}
            onClick={() => handleEditClick('Surgical and Non-Surgical')}
            startIcon={<MedicalServicesIcon />}
          >
            Surgical and Non-Surgical
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
            }}
            onClick={() => handleEditClick('Pharmaceutical')}
            startIcon={<LocalPharmacyIcon />}
          >
            Pharmaceutical
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
              marginLeft: '8px',
            }}
            onClick={() => handleEditClick('Suppliers')}
            startIcon={<LocalShippingIcon />}
          >
            Suppliers
          </Button>
        </Grid>
      </Grid>

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
            <Typography sx={{ m: 0, mr: 'auto', fontSize: '20px' }}>Available Stocks and Supplies</Typography>
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{ borderRadius: 1, ml: 'auto' }}
=======
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
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  ml: 2,
<<<<<<< HEAD
                  borderRadius: 2,
=======
                  borderRadius: 2, // Adding borderRadius
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
                },
              }}
              onChange={handleSearch}
            />
<<<<<<< HEAD
          </Box>
          <Divider sx={{ mb: 20 }} />
          {/* Other content related to staff assignment */}
        </Paper>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
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
          Add Stocks
        </Button>
      </Box>

      {/* Dialog for Edit functionality */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Edit Staff Assignment</DialogTitle>
        <DialogContent>
          {/* Add form fields or content for editing */}
          <TextField fullWidth variant="outlined" label="Item Name" defaultValue="Slay" sx={{ mt: 2, mb: 2 }} />
          <TextField fullWidth variant="outlined" label="Quantity" defaultValue="12" sx={{ mb: 2 }} />
          <TextField fullWidth variant="outlined" label="Supplier" defaultValue="BGC corp" sx={{ mb: 2 }} />
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
  );
}
=======
          </div>
        </div>
        {/* Add more content related to stocks and supplies */}
      </Paper>
    </div>
  );
};

export default StocksAndSupplies;
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
