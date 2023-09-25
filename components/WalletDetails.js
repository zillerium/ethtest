import React, { useContext, useEffect } from 'react';
import { WalletContext } from '../lib/WalletContext';
import { useBalance, useAccount } from 'wagmi';

function WalletDetails() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const { address, isConnected } = useAccount(); // Get the isConnected status
  const { data, isError, isLoading } = useBalance({
    address,
  });

  useEffect(() => {
    setUserAddress(address);
  }, [address, setUserAddress]);

  // Conditionally render the component based on the wallet connection status
  if (!isConnected) {
    return null; // Return null to hide the component when not connected
  }

  return (
    <div style={{ background: '#3333FF', padding: '10px', borderRadius: '5px' }}>
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

