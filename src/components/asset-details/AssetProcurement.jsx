
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetProcurement = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Procurement & Financial Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Purchase Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Purchase Cost"
            placeholder="Enter cost"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Vendor Name"
            placeholder="Enter vendor name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Warranty Expiry Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Depreciation Value"
            placeholder="Enter depreciation value"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Budget Code / Cost Center"
            placeholder="Enter budget code"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetProcurement;
