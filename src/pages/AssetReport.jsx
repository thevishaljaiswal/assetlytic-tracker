
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Card,
  CardContent,
  CardHeader
} from '@mui/material';
import { ArrowBack, Download } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AssetReport = () => {
  const navigate = useNavigate();

  const assetData = [
    { type: "Laptop", count: 45 },
    { type: "Desktop", count: 30 },
    { type: "Server", count: 15 },
    { type: "Network Device", count: 25 },
    { type: "Mobile Device", count: 35 },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            startIcon={<ArrowBack />} 
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Typography variant="h4" component="h1">Asset Report</Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Download />}
        >
          Export Report
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader
              title="Total Assets"
              titleTypographyProps={{ variant: 'subtitle2' }}
            />
            <CardContent>
              <Typography variant="h4">150</Typography>
              <Typography variant="caption" color="text.secondary">
                +2% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader
              title="Active Assets"
              titleTypographyProps={{ variant: 'subtitle2' }}
            />
            <CardContent>
              <Typography variant="h4">125</Typography>
              <Typography variant="caption" color="text.secondary">
                83% of total assets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader
              title="Total Value"
              titleTypographyProps={{ variant: 'subtitle2' }}
            />
            <CardContent>
              <Typography variant="h4">$245,000</Typography>
              <Typography variant="caption" color="text.secondary">
                Average $1,633 per asset
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader
              title="Maintenance Due"
              titleTypographyProps={{ variant: 'subtitle2' }}
            />
            <CardContent>
              <Typography variant="h4">12</Typography>
              <Typography variant="caption" color="text.secondary">
                Within next 30 days
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Asset Distribution by Type" />
        <CardContent>
          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Filters</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              placeholder="Search assets..."
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              label="Asset Type"
            >
              <MenuItem value="laptop">Laptop</MenuItem>
              <MenuItem value="desktop">Desktop</MenuItem>
              <MenuItem value="server">Server</MenuItem>
              <MenuItem value="network">Network Device</MenuItem>
              <MenuItem value="mobile">Mobile Device</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              label="Status"
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="maintenance">Under Maintenance</MenuItem>
              <MenuItem value="retired">Retired</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              label="Department"
            >
              <MenuItem value="it">IT</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="hr">HR</MenuItem>
              <MenuItem value="sales">Sales</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>AST001</TableCell>
              <TableCell>Dell XPS 15</TableCell>
              <TableCell>Laptop</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>IT</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>2023-01-15</TableCell>
              <TableCell>$1,899</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AST002</TableCell>
              <TableCell>HP ProDesk 600</TableCell>
              <TableCell>Desktop</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Finance</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>2023-02-20</TableCell>
              <TableCell>$1,299</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AST003</TableCell>
              <TableCell>Cisco Switch</TableCell>
              <TableCell>Network Device</TableCell>
              <TableCell>Maintenance</TableCell>
              <TableCell>IT</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>2023-03-10</TableCell>
              <TableCell>$2,499</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AssetReport;
