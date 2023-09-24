import React, {useContext, useEffect} from 'react';
import {WalletContext} from '../pages/WalletContext'

import { useBalance, useAccount } from 'wagmi';

function WalletDetails() {
	    const  {
               userAddress, setUserAddress
                } = useContext(WalletContext);

  const { address } = useAccount(); // Get the connected wallet's address
  const { data, isError, isLoading } = useBalance({
    address, // Use the connected wallet's address
  });

useEffect(() => {
    setUserAddress(address);
  }, [address, setUserAddress]);


  if (isLoading) return <div>Loading wallet details...</div>;
  if (isError) return <div>Error fetching wallet details</div>;

  return (
    <div>
      <h3>Wallet Balance</h3>
      <p>Wallet Address: {address}</p>
      <p>Balance: {data?.formatted} {data?.symbol}</p>
      {/* Display other wallet-related information here */}
    </div>
  );
}

export default WalletDetails;

