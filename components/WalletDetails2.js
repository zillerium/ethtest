// WalletDetails.js
import React, { useContext, useEffect } from 'react';
import { WalletContext } from '../pages/WalletContext';
import { useBalance, useAccount } from 'wagmi';

function WalletDetails() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
  });

  useEffect(() => {
    setUserAddress(address);
  }, [address, setUserAddress]);

  if (isLoading) return <div>Loading wallet details...</div>;
  if (isError) return <div>Error fetching wallet details</div>;

  return (
    <div>
      <p>
        {userAddress && (
          <span>
            {userAddress} | Goerli | {data?.formatted} {data?.symbol}
          </span>
        )}
      </p>
    </div>
  );
}

export default WalletDetails;

