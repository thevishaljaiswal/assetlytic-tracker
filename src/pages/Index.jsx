
import React from 'react';
import { Container, Box } from '@mui/material';
import Header from "@/components/Header";
import AssetGrid from "@/components/AssetGrid";

const Index = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Header />
        <AssetGrid />
      </Container>
    </Box>
  );
};

export default Index;
