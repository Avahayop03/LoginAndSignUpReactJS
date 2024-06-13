import * as React from 'react';
import { Container, Grid, Paper, Typography, TextField, Box, 
        InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Wards() {
  const [wardName, setWardName] = React.useState('');

  const handleWardChange = (event) => {
    setWardName(event.target.value);
  };

  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:5 }}>

              <FormControl variant="outlined" sx={{ minWidth: 200, mr: 2 }}>
                <InputLabel>Ward Name</InputLabel>
                <Select
                  value={wardName}
                  onChange={handleWardChange}
                  label="Ward Name"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Ward 1">Ward 1</MenuItem>
                  <MenuItem value="Ward 2">Ward 2</MenuItem>
                  <MenuItem value="Ward 3">Ward 3</MenuItem>
                  {/* Add more wards as needed */}
                </Select>
              </FormControl>

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
            <Typography>CHUCHU</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
