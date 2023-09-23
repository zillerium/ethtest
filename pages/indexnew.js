import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import UserDetailsInput from '../components/UserDetailsInput';
import { WagmiConfig, useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import config from '../wagmi/wagmiConfig'; // Adjust the import path based on your file structure
import WalletControls from '../components/WalletControls'; // Import the WalletControls component

function Home() {
  // State to store user details
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });

  // Function to update user details
  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

  return (
    <WagmiConfig config={config}>
      <Container className="bg-black text-light">
        <Card bg="black" text="light">
          <Card.Header>
            <h1>User Details App</h1>
            <WalletControls />
          </Card.Header>
          <Card.Body>
            <UserDetailsInput setUserDetails={updateUserDetails} />
            <div>
              <h2>User Details</h2>
              <UserData userDetails={userDetails} />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </WagmiConfig>
  );
}

function UserData2({ userDetails }) {
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <p>Connected to {address}</p>
      ) : (
        <p>Not connected to a wallet</p>
      )}
      <p>Username: {userDetails.username}</p>
      {/* Display additional user details here */}
    </div>
  );
}

function UserData1({ userDetails }) {
  const { address, isConnected } = useAccount();

  if (isConnected) {
    return (
      <div>
        <p>Connected to {address}</p>
        <p>Username: {userDetails.username}</p>
        {/* Display additional user details here */}
      </div>
    );
  }

  return <p>Not connected to a wallet</p>;
}

export default Home;

