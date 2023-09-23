// WalletControls.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useConnect, useDisconnect, useAccount } from 'wagmi'; // Import the necessary hooks
import { InjectedConnector } from 'wagmi/connectors/injected';

function WalletControls() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect()


  return (
    <div>
      {isConnected ? (
        <Button onClick={() => disconnect()}>Disconnect Wallet</Button>
      ) : (
        <Button onClick={() => connect()}>Connect Wallet</Button>
      )}
    </div>
  );
}

export default WalletControls;

