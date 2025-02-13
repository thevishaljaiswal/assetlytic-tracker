
import React from 'react';
import { Paper, Grid, TextField, Typography } from '@mui/material';

const AssetPerformance = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Asset Performance & Maintenance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Status"
            placeholder="e.g., Active, In Use"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Last Maintenance Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Next Maintenance Due"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="MTBF (Mean Time Between Failures)"
            placeholder="Enter MTBF"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="MTTR (Mean Time to Repair)"
            placeholder="Enter MTTR"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Support Ticket History"
            placeholder="Enter ticket history"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetPerformance;
