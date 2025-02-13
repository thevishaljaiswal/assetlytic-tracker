
import React from 'react';
import { Grid } from '@mui/material';
import AssetCard from './AssetCard';

const mockAssets = [
  {
    id: "AST001",
    name: "Dell XPS 15",
    type: "Laptop",
    status: "Active",
    assignedTo: "John Doe",
    location: "HQ - Floor 2",
  },
  {
    id: "AST002",
    name: "HP ProDesk 600",
    type: "Desktop",
    status: "Maintenance",
    assignedTo: "Jane Smith",
    location: "Branch Office",
  },
  {
    id: "AST003",
    name: "Cisco Switch",
    type: "Network",
    status: "Active",
    assignedTo: "IT Department",
    location: "Server Room",
  },
  {
    id: "AST004",
    name: "Adobe Creative Suite",
    type: "Software",
    status: "Active",
    assignedTo: "Design Team",
    location: "Design Department",
  },
];

const AssetGrid = () => {
  return (
    <Grid container spacing={3}>
      {mockAssets.map((asset) => (
        <Grid item xs={12} md={6} lg={4} key={asset.id}>
          <AssetCard asset={asset} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AssetGrid;
