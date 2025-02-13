
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetGeneralInfo = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        General Asset Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Asset ID"
            placeholder="Enter asset ID"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Asset Name"
            placeholder="e.g., Dell Laptop XPS 15"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Asset Type"
            placeholder="e.g., Laptop"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Manufacturer"
            placeholder="e.g., Dell"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Model Number"
            placeholder="Enter model number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Serial Number"
            placeholder="Enter serial number"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetGeneralInfo;
