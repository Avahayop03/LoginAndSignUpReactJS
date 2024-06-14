import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function SavePage() {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/dashboard/staffAlloc');
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
        onClick={handleSaveClick}
      >
        Save
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
        {/* Content inside the Paper component */}
      </Paper>
    </div>
  );
}
