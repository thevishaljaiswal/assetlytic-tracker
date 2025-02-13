
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetSoftware = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Software & License Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Software Name"
            placeholder="Enter software name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="License Type"
            placeholder="e.g., Perpetual, Subscription"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="License Key"
            placeholder="Enter license key"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Expiry Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Number of Users Allowed"
            placeholder="Enter number of users"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetSoftware;
