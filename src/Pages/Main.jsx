import * as React from 'react';
import { Grid, Container, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
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

        {/* New Grid item for Staff and Details button */}
        <Grid item xs={12}>
          <Paper sx={{ p: 8 }}>
            <Typography component="h6" variant="h5" color="inherit" sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <span>Staff</span>
              {/* Details button aligned to the right */}
              <Button variant="outlined" color="success" sx={{ ml: 'auto', position: 'relative', zIndex: 1 }}>
                Details
              </Button>
              {/* Long underline */}
              <Box sx={{ width: '100%', borderBottom: '2px solid green', position: 'absolute', bottom: 0, left: 0 }} />
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              {/* Other buttons aligned to the left */}
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

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Row 1, Cell 1</TableCell>
                    <TableCell>Row 1, Cell 2</TableCell>
                    <TableCell>Row 1, Cell 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Row 2, Cell 1</TableCell>
                    <TableCell>Row 2, Cell 2</TableCell>
                    <TableCell>Row 2, Cell 3</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
