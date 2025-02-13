
import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Box, Tabs, Tab, Typography } from '@mui/material';
import AssetGeneralInfo from "@/components/asset-details/AssetGeneralInfo";
import AssetProcurement from "@/components/asset-details/AssetProcurement";
import AssetLocation from "@/components/asset-details/AssetLocation";
import AssetSoftware from "@/components/asset-details/AssetSoftware";
import AssetPerformance from "@/components/asset-details/AssetPerformance";
import AssetSecurity from "@/components/asset-details/AssetSecurity";
import AssetRetirement from "@/components/asset-details/AssetRetirement";

const AssetDetails = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Asset Details - {id}
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="asset details tabs"
        >
          <Tab label="General Info" />
          <Tab label="Procurement" />
          <Tab label="Location" />
          <Tab label="Software" />
          <Tab label="Performance" />
          <Tab label="Security" />
          <Tab label="Retirement" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <AssetGeneralInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetProcurement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AssetLocation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssetSoftware />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AssetPerformance />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AssetSecurity />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AssetRetirement />
      </TabPanel>
    </Container>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`asset-tabpanel-${index}`}
      aria-labelledby={`asset-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default AssetDetails;
