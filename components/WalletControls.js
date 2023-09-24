// WalletControls.js
import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import {WalletContext} from '../pages/WalletContext'
import { useConnect, useDisconnect, useAccount } from 'wagmi'; // Import the necessary hooks
import { InjectedConnector } from 'wagmi/connectors/injected';

function WalletControls() {
	 const  {
               userAddress, setUserAddress 
                } = useContext(WalletContext);
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

