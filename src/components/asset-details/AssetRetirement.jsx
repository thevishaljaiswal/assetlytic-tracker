
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetRetirement = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Asset Retirement & Disposal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Decommission Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Reason for Disposal"
            placeholder="e.g., End-of-life, damaged"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Disposal Method"
            placeholder="e.g., Recycled, Resold"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Resale Value"
            placeholder="Enter resale value"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Disposal Compliance"
            placeholder="Enter disposal compliance details"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetRetirement;
