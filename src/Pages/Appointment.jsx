import * as React from 'react';
import {Container, Grid, Paper, Typography, TextField, Box,
  InputAdornment,  Divider,  Button,  Table,  TableBody, TableCell, TableContainer,
  TableHead, TableRow, Dialog, DialogTitle,  DialogContent, DialogActions,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};

export default function Appointment() {
  const [openDialog, setOpenDialog] = React.useState(false); // State for dialog visibility

  const handleAddClick = () => {
    setOpenDialog(true); // Open dialog for adding new patient
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close dialog
  };

  const handleSave = () => {
    // Implement save functionality for registering patient
    console.log('Registering new patient...');
    handleCloseDialog(); // Close dialog after saving
  };

  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{ borderRadius: 3, ml: 'auto' }} // Move to the right
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  ml: 2,
                  borderRadius: 2,
                  fontSize: '14px',
                },
              }}
            />
          </Box>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography component="h6" variant="h5">Patient Appointment</Typography>
              <Button
                sx={{
                  width: '120px',
                  padding: '10px', // Set the width of the button
                  backgroundColor: '#388e3c',
                  '&:hover': { backgroundColor: '#194d33' },
                  borderRadius: '15px',
                  color: 'white',
                  fontSize: '0.70rem',
                }}
                onClick={handleAddClick}
              >
                Add
              </Button>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', ml: 'auto', width: '100%' }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={verticalLine}>Patient Number</TableCell>
                        <TableCell sx={verticalLine}>Patient Name</TableCell>
                        <TableCell sx={verticalLine}>Bed Number</TableCell>
                        <TableCell sx={{ verticalLine, textAlign: 'center' }}>Action</TableCell>
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
                                mr: 1,
                                mb: 1,
                                fontSize: '0.70rem',
                              }}
                            >
                              Start Consultation
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                      {/* Additional rows can be added here */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Dialog for Add functionality */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add Patient</DialogTitle>
        <DialogContent>
          {/* Add form fields or content for registering a new patient */}
          <TextField fullWidth variant="outlined" label="Patient Name" sx={{ mt:2, mb: 2 }} />
          <TextField fullWidth variant="outlined" label="Bed Number" sx={{ mb: 2 }} />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: 'green', color: 'white' }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
