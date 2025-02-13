
import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
  Container
} from '@mui/material';
import { Add, Search, Description } from '@mui/icons-material';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
      <Container>
        <Toolbar sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, py: 2 }}>
          <Typography variant="h5" component="h1" color="primary" fontWeight="bold" sx={{ flexGrow: { md: 1 } }}>
            IT Asset Management
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', md: 'auto' }, alignItems: 'center' }}>
            <Box sx={{ position: 'relative', flexGrow: 1, width: { md: '250px' } }}>
              <TextField
                size="small"
                placeholder="Search assets..."
                fullWidth
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
                }}
              />
            </Box>
            <Button 
              variant="outlined" 
              startIcon={<Description />}
              onClick={() => navigate('/report')}
            >
              Report
            </Button>
            <Button 
              variant="contained" 
              startIcon={<Add />}
            >
              Add Asset
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
