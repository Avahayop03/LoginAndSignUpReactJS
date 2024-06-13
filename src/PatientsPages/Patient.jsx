import * as React from 'react';
import { Container, Grid, Paper} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import OutPatient from './OutPatient';

export default function Patient() {
  return (
    <Container display="flex" sx={{ mt: -5, mb: 2 }}>
      <Grid container spacing={5} justifyContent="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Paper sx={{ p: 10 }}>
            <Grid container spacing={5} justifyContent="space-between" alignItems="center">
              <Grid item xs={5}>
                <Link to="/dashboard/patient/outPatient" >
                  <Paper
                    sx={{
                      p: 5,
                      backgroundColor: '#007bff',
                      '&:hover': { backgroundColor: '#0056b3' },
                      borderRadius: '5px',
                      color: '#fff', // To ensure text color contrasts with background
                      textAlign: 'center', // Center text within the paper
                    }}
                    variant="contained"
                  >
                    OutPatient
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={3}>
                <Link to="/dashboard/patient/waitingLists" >
                  <Paper
                    sx={{
                      p: 5,
                      backgroundColor: '#388e3c',
                      '&:hover': { backgroundColor: '#194d33' },
                      borderRadius: '5px',
                      color: '#fff',
                      textAlign: 'center',
                    }}
                    variant="contained"
                  >
                    Waiting List
                  </Paper>
                </Link>
              </Grid>

              <Grid item xs={3.6}>
              <Link to="/dashboard/patient/currentInPatient" >

                <Paper
                  sx={{
                    p: 5,
                    backgroundColor: '#d32f2f',
                    '&:hover': { backgroundColor: '#b71c1c' },
                    borderRadius: '5px',
                    color: '#fff',
                    textAlign: 'center',
                  }}
                  variant="contained"
                >
                  InPatient
                </Paper>
                </Link>
              </Grid>

              <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
            
                <Paper sx = {{p:8}}>
                <Outlet />
                <OutPatient/>
                </Paper>
             
            
          </Container>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
