import * as React from 'react';
import { Container, Grid, Paper, Typography, TextField, Box, 
        InputAdornment, Divider, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Appointment() {
  
  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:5 }}>

              
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
              />
            </Box>
            <Paper sx={{ p: 20 }}>
            <Typography variant="h5">Patient Appointment</Typography>
            <Button sx={{ ml: 'auto', borderRadius: 2,
              backgroundColor: '#388e3c',
              '&:hover': { backgroundColor: '#194d33' },
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center', 
              color:'white'
              }}>Add</Button>
            <Divider />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
