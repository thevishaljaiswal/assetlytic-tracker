
import React from 'react';
import { 
  Paper, 
  Grid, 
  TextField, 
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';

const AssetSecurity = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Security & Compliance Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Asset Tag (Barcode/RFID)"
            placeholder="Enter asset tag"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel>Encryption Status</FormLabel>
            <RadioGroup defaultValue="no" row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Compliance Status"
            placeholder="e.g., ISO, GDPR"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel>Antivirus Installed</FormLabel>
            <RadioGroup defaultValue="no" row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Last Security Audit Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetSecurity;
