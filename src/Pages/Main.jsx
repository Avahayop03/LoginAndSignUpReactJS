import * as React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
import { Grid, Container, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
=======
<<<<<<< HEAD
import { Grid, Container, Paper, Table, TableContainer, TableHead, 
      TableBody, TableRow, TableCell, Typography, Toolbar, Box, CssBaseline,
    Button, Divider } from '@mui/material';
=======
import { Grid, Container, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button } from '@mui/material';
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
>>>>>>> a3110c38df82852ba54f8c41ac60c3e6f09cc2c1
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
<<<<<<< HEAD
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
            <Grid container spacing={2} justifyContent="space-between" alignItems="center" >
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
                    <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                      Staff Details
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
                        <TableRow>
                          <TableCell sx={verticalLine}>Row 1, Cell 1</TableCell>
                          <TableCell sx={verticalLine}>Row 1, Cell 2</TableCell>
                          <TableCell sx={verticalLine}>Row 1, Cell 3</TableCell>
                          <TableCell sx={verticalLine}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                                Add
                              </Button>
                              <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
                                Update
                              </Button>
                              <Button variant="contained" color="error">
                                Delete
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
=======
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="space-between" alignItems="center">
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
              <Typography variant="h6" color="white">Patient</Typography>
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
              <Typography variant="h6" color="white">Appointment</Typography>
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
              <Typography variant="h6" color="white">Wards</Typography>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 8 }}>
            <Typography component="h6" variant="h5" color="inherit" sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <span>Staff</span>
              <Button variant="outlined" color="success" sx={{ ml: 'auto', position: 'relative', zIndex: 1 }}>
                Details
              </Button>
              <Box sx={{ width: '100%', borderBottom: '2px solid green', position: 'absolute', bottom: 0, left: 0 }} />
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={handleOpen}>
                Add
              </Button>
              <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={() => handleEditStaff(currentStaff)}>
                Update
              </Button>
              <Button variant="contained" color="error" onClick={() => handleDeleteStaff(currentStaff.id)}>
                Delete
              </Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {staff.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell>{staff.name}</TableCell>
                      <TableCell>{staff.position}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleEditStaff(staff)}>Edit</Button>
                        <Button variant="contained" color="error" onClick={() => handleDeleteStaff(staff.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Staff' : 'Add Staff'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the staff details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={currentStaff.name}
            onChange={(e) => setCurrentStaff({ ...currentStaff, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Position"
            type="text"
            fullWidth
            variant="standard"
            value={currentStaff.position}
            onChange={(e) => setCurrentStaff({ ...currentStaff, position: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddUpdateStaff}>{isEditing ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </Container>
>>>>>>> 8b7c4354149b6748b68eaf87e8a06901cb4c38a4
  );
}
