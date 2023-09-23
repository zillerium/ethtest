// components/WalletDetails.js
import React from 'react';
import { useAccount } from 'wagmi';

function WalletDetails() {
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <p>Connected to {address}</p>
      ) : (
        <p>Not connected to a wallet</p>
      )}
    </div>
  );
}

export default WalletDetails;

