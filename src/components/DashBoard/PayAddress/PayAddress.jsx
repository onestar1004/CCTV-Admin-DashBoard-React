import React from 'react';

// project imports
import MainCard from 'components/Base/MainCard';
import SkeletonPayAddress from 'components/Cards/Skeleton/PayAddress';

function PayAddress({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <SkeletonPayAddress />
      ) : (
        <MainCard title="Paypal, Payoneer">123</MainCard>
      )}
    </>
  );
}

export default PayAddress;
