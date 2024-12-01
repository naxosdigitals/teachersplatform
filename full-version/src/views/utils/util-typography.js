'use client';

// material-ui
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// Import data from external file
import plandata from './pageconfigs/plandata.js';

// Reusable Card Component
const TypographyCard = ({ title, content, path }) => (
  <Grid item xs={12} sm={6} md={3}>
    <SubCard>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MuiTypography variant="h6" style={{ fontWeight: 'bold' }}>
          {title}
        </MuiTypography>
        <Button variant="outlined" size="small">
          Create Now
        </Button>
      </div>
      <Grid container direction="column" spacing={1} style={{ marginTop: '8px' }}>
        {content.map((text, index) => (
          <Grid item key={index}>
            <MuiTypography variant="body1" gutterBottom>
              {text}
            </MuiTypography>
          </Grid>
        ))}
      </Grid>
    </SubCard>
  </Grid>
);

const Typography = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories, including "All"
  const categories = ['All', ...new Set(plandata.map((item) => item.category))];

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === 'All'
      ? plandata
      : plandata.filter((item) => item.category === selectedCategory);

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <MainCard title="Tools">
      {/* Filter Bar */}
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        {categories.map((category) => (
          <Grid item key={category}>
            <Button
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Display Items with Category Titles */}
      <Grid container spacing={gridSpacing}>
        {Object.keys(groupedItems).map((category) => (
          <React.Fragment key={category}>
            {/* Category Header */}
            <Grid item xs={12}>
              <MuiTypography variant="h5" style={{ fontWeight: 'bold', marginTop: '20px' }}>
                {category}
              </MuiTypography>
            </Grid>
            {/* Category Items */}
            {groupedItems[category].map((item, index) => (
              <TypographyCard
                key={index}
                title={item.title}
                content={item.content}
                path={item.path} // Path can be used for navigation in the future
              />
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </MainCard>
  );
};

export default Typography;
