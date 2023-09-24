// In WalletDetails.js
import React from 'react';
import { useBalance } from 'wagmi';
import { useAddress } from './AddressContext'; // Import the context hook

function WalletDetails() {
  const { userAddress } = useAddress(); // Get the connected wallet's address from the context
  const { data, isError, isLoading } = useBalance({
    address: userAddress, // Use the connected wallet's address
  });

  if (isLoading) return <div>Loading wallet details...</div>;
  if (isError) return <div>Error fetching wallet details</div>;

  return (
    <div>
      <h3>Wallet Balance</h3>
      <p>Wallet Address: {userAddress}</p> {/* Use the userAddress from the context */}
      <p>Balance: {data?.formatted} {data?.symbol}</p>
      {/* Display other wallet-related information here */}
    </div>
  );
}

export default WalletDetails;

