
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Chip,
  Grid,
  Box
} from '@mui/material';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "success";
    case "maintenance":
      return "warning";
    case "retired":
      return "error";
    default:
      return "default";
  }
};

const AssetCard = ({ asset }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        cursor: 'pointer', 
        '&:hover': { boxShadow: 6 },
        transition: 'box-shadow 0.3s'
      }}
      onClick={() => navigate(`/asset/${asset.id}`)}
    >
      <CardHeader
        title={asset.name}
        action={
          <Chip 
            label={asset.status}
            color={getStatusColor(asset.status)}
            size="small"
          />
        }
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">Asset ID:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">{asset.id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">Type:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">{asset.type}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">Assigned To:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">{asset.assignedTo}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">Location:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">{asset.location}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
