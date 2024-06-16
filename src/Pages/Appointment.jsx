import * as React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Box, InputAdornment, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
=======
import {Container, Grid, Paper, Typography, TextField, Box,
  InputAdornment,  Divider,  Button,  Table,  TableBody, TableCell, TableContainer,
  TableHead, TableRow, Dialog, DialogTitle,  DialogContent, DialogActions,} from '@mui/material';
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
import SearchIcon from '@mui/icons-material/Search';

const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};

export default function Appointment() {
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: '',
    date: '',
    time: '',
    notes: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setAppointmentDetails({ patientName: '', date: '', time: '', notes: '' });
    setCurrentAppointmentId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddAppointment = () => {
    if (isEditing) {
      setAppointments(appointments.map(appointment =>
        appointment.id === currentAppointmentId ? { ...appointmentDetails, id: currentAppointmentId } : appointment
      ));
    } else {
      setAppointments([...appointments, { ...appointmentDetails, id: appointments.length + 1 }]);
    }
    handleClose();
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const handleEditAppointment = (appointment) => {
    setAppointmentDetails(appointment);
    setCurrentAppointmentId(appointment.id);
    setIsEditing(true);
    handleOpen();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

=======
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

>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
            <TextField
              variant="outlined"
              placeholder="Search"
<<<<<<< HEAD
              sx={{ borderRadius: 1, ml: 'auto' }} // Move to the right
=======
              sx={{ borderRadius: 3, ml: 'auto' }} // Move to the right
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
<<<<<<< HEAD
                  ml: 2, borderRadius: 2, // Adding borderRadius
                },
              }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>
          <Paper sx={{ p: 5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Patient Appointment</Typography>
            <Button 
              onClick={handleOpen}
              sx={{ 
                ml: 'auto', 
                borderRadius: 2,
                backgroundColor: '#388e3c',
                '&:hover': { backgroundColor: '#194d33' },
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                mb: 2
              }}
            >
              Add
            </Button>
            <Divider />
            {/* List of appointments */}
            <Box sx={{ mt: 2 }}>
              {filteredAppointments.map((appointment) => (
                <Paper key={appointment.id} sx={{ p: 2, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">{appointment.patientName}</Typography>
                    <Typography>{appointment.date} at {appointment.time}</Typography>
                    <Typography variant="body2">{appointment.notes}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleEditAppointment(appointment)}
                      sx={{ ml: 2 }}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="contained" 
                      color="error" 
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      sx={{ ml: 2 }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Paper>
              ))}
=======
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
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
            </Box>
          </Paper>
        </Grid>
      </Grid>

<<<<<<< HEAD
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Appointment' : 'Add Appointment'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Patient Name"
            name="patientName"
            type="text"
            fullWidth
            variant="outlined"
            value={appointmentDetails.patientName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Date"
            name="date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={appointmentDetails.date}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Time"
            name="time"
            type="time"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={appointmentDetails.time}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Notes"
            name="notes"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={appointmentDetails.notes}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddAppointment}>{isEditing ? 'Save' : 'Add'}</Button>
=======
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
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
        </DialogActions>
      </Dialog>
    </Container>
  );
}
