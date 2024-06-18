import * as React from 'react';
import { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Box, InputAdornment, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};

export default function Appointment() {
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

  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
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
            </Box>
          </Paper>
        </Grid>
      </Grid>

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
        </DialogActions>
      </Dialog>
    </Container>
  );
}
