
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetLocation = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Asset Location & Assignment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Asset Location"
            placeholder="e.g., Office, Data Center"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Department"
            placeholder="e.g., IT, Finance"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Assigned User"
            placeholder="Enter user name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Employee ID"
            placeholder="Enter employee ID"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Assignment Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetLocation;
