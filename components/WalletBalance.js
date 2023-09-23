import React from 'react';

function WalletBalance({ balance }) {
  return (
    <>
      <h2>Wallet Balance</h2>
      {balance ? (
        <p>Balance: {balance}</p>
      ) : (
        <p>Wallet not connected or balance unavailable</p>
      )}
    </>
  );
}

export default WalletBalance;

