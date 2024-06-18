import * as React from 'react';
import { useState } from 'react';
import {
  Grid,
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  CssBaseline,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HotelIcon from '@mui/icons-material/Hotel';

const verticalLine = {
  border: '1px solid rgba(224, 224, 224, 1)'
};

export default function Main() {
  const [staff, setStaff] = useState([
    { id: 1, name: 'John Doe', position: 'Doctor' },
    { id: 2, name: 'Jane Smith', position: 'Nurse' },
  ]);
  const [open, setOpen] = useState(false);
  const [currentStaff, setCurrentStaff] = useState({ id: null, name: '', position: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddUpdateStaff = () => {
    if (isEditing) {
      setStaff(staff.map(item => item.id === currentStaff.id ? currentStaff : item));
    } else {
      setStaff([...staff, { ...currentStaff, id: staff.length + 1 }]);
    }
    handleClose();
    setCurrentStaff({ id: null, name: '', position: '' });
    setIsEditing(false);
  };

  const handleDeleteStaff = (id) => {
    setStaff(staff.filter(item => item.id !== id));
  };

  const handleEditStaff = (staff) => {
    setCurrentStaff(staff);
    setIsEditing(true);
    handleOpen();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth="false" sx={{ mt: -5 }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pr: '24px',
          }}
        ></Toolbar>
        <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
              <Grid item xs={5}>
                <Link to="/dashboard/Patient" style={{ textDecoration: 'none' }}>
                  <Paper
                    sx={{
                      p: 5,
                      backgroundColor: '#007bff',
                      '&:hover': { backgroundColor: '#0056b3' },
                      borderRadius: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    variant="contained"
                  >
                    <LocalHospitalIcon style={{ fontSize: 40, color: 'white', marginRight: 10 }} />
                    <Typography variant="h6" color="white">
                      Patient
                    </Typography>
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={3}>
                <Link to="/dashboard/Appointment" style={{ textDecoration: 'none' }}>
                  <Paper
                    sx={{
                      p: 5,
                      backgroundColor: '#388e3c',
                      '&:hover': { backgroundColor: '#194d33' },
                      borderRadius: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    variant="contained"
                  >
                    <EventNoteIcon style={{ fontSize: 40, color: 'white', marginRight: 10 }} />
                    <Typography variant="h6" color="white">
                      Appointment
                    </Typography>
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={3}>
                <Link to="/dashboard/Wards" style={{ textDecoration: 'none' }}>
                  <Paper
                    sx={{
                      p: 5,
                      backgroundColor: '#d32f2f',
                      '&:hover': { backgroundColor: '#b71c1c' },
                      borderRadius: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    variant="contained"
                  >
                    <HotelIcon style={{ fontSize: 40, color: 'white', marginRight: 10 }} />
                    <Typography variant="h6" color="white">
                      Wards
                    </Typography>
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 8 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography component="h6" variant="h5" color="inherit">
                      Staff
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={handleOpen}>
                      Add Staff
                    </Button>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={verticalLine}>Staff Number</TableCell>
                          <TableCell sx={verticalLine}>Staff Name</TableCell>
                          <TableCell sx={verticalLine}>Position</TableCell>
                          <TableCell sx={verticalLine}><Typography sx={{ textAlign: 'center', fontSize: '14px' }}>Action</Typography></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {staff.map((staffMember, index) => (
                          <TableRow key={staffMember.id}>
                            <TableCell sx={verticalLine}>{index + 1}</TableCell>
                            <TableCell sx={verticalLine}>{staffMember.name}</TableCell>
                            <TableCell sx={verticalLine}>{staffMember.position}</TableCell>
                            <TableCell sx={verticalLine}>
                              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleEditStaff(staffMember)}>
                                  Edit
                                </Button>
                                <Button variant="contained" color="error" onClick={() => handleDeleteStaff(staffMember.id)}>
                                  Delete
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Staff' : 'Add Staff'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing ? 'Edit the details of the staff member.' : 'Enter the details of the new staff member.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={currentStaff.name}
            onChange={(e) => setCurrentStaff({ ...currentStaff, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Position"
            type="text"
            fullWidth
            value={currentStaff.position}
            onChange={(e) => setCurrentStaff({ ...currentStaff, position: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddUpdateStaff} color="primary">
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
