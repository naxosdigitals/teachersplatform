'use client';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import BasicTimeline from 'components/ui-elements/advance/UITimeline/BasicTimeline';
import RightAlignedTimeline from 'components/ui-elements/advance/UITimeline/RightAlignedTimeline';
import AlternateTimeline from 'components/ui-elements/advance/UITimeline/AlternateTimeline';
import ColorsTimeline from 'components/ui-elements/advance/UITimeline/ColorsTimeline';
import OutlinedTimeline from 'components/ui-elements/advance/UITimeline/OutlinedTimeline';
import OppositeContentTimeline from 'components/ui-elements/advance/UITimeline/OppositeContentTimeline';
import CustomizedTimeline from 'components/ui-elements/advance/UITimeline/CustomizedTimeline';

import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| UI TIMELINE ||============================== //

const UITimeline = () => (
  <MainCard title="Timeline" secondary={<SecondaryAction link="https://next.material-ui.com/components/timeline/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Basic">
          <BasicTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Right Aligned">
          <RightAlignedTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Alternating">
          <AlternateTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Color">
          <ColorsTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Outlined">
          <OutlinedTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SubCard title="Opposite Content">
          <OppositeContentTimeline />
        </SubCard>
      </Grid>
      <Grid item xs={12}>
        <SubCard title="Customized">
          <CustomizedTimeline />
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);

export default UITimeline;
