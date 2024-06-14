import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function WardRequisition() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/dashboard/wardReq/add');
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: 'auto', marginTop: '20vh', marginBottom: '20vh' }}>
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
          <h2 style={{ margin: 0, marginRight: 'auto' }}>Ward Requisition</h2>
          <Button
            variant="contained"
            sx={{ 
              marginLeft: 'auto',
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen'
              }
            }}
          >
            Search
          </Button>
          <div 
            style={{ 
              position: 'absolute', 
              left: 0, 
              right: 0, 
              bottom: '-4px',
              height: '3px',
              backgroundColor: 'black'
            }}
          />
        </div>
        {/* Other content related to ward requisition */}
      </Paper>
    </div>
  );
}
