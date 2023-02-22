import React from 'react';

// Material UI
import Alert from '@mui/material/Alert';

// project imports
import MainCard from 'components/Base/MainCard';
import SkeletonPayAddress from 'components/Cards/Skeleton/PayAddress';

function CryptoCurrency({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <SkeletonPayAddress />
      ) : (
        <MainCard title="CryptoCurrency">
          <Alert severity="error" icon={false}>
            <strong>
              Before process the payment, Please check the address and network
              again !!!
            </strong>
          </Alert>
        </MainCard>
      )}
    </>
  );
}

export default CryptoCurrency;
