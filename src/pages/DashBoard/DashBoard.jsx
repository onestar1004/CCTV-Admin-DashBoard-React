import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import TotalPayment from 'components/DashBoard/TotalPayment';
import PaymentOrder from 'components/DashBoard/PaymentOrder';
import TotalBid from 'components/DashBoard/TotalBid';
import BidRank from 'components/DashBoard/BidRank';
import PayAddress from 'components/DashBoard/PayAddress';
import CryptoCurrecy from 'components/DashBoard/CryptoCurrecy';
import CleaningCorridor from 'components/DashBoard/CleaningCorridor';
import DutyForWater from 'components/DashBoard/DutyForWater';

// constant imports
import { gridSpacing } from 'config/constant';

// utils imports
// import { isEmpty } from 'utils/isEmpty';

// ==============================|| DEFAULT DASHBOARD ||============================== //

function Dashboard() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(123);
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalPayment isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <PaymentOrder isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalBid isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <BidRank isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <PayAddress isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CryptoCurrecy isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <CleaningCorridor isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DutyForWater isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
