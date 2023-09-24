import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import UserDetailsInput from '../components/UserDetailsInput';
import { WagmiConfig } from 'wagmi';
import config from '../wagmi/wagmiConfignew';
import WalletControls from '../components/WalletControls';
import UserDetails from '../components/UserDetails';
import WalletDetails from '../components/WalletDetails';
import ContractRead from '../components/ContractRead';
import SimpleComponent from '../components/SimpleComponent';
import contractABI from './contractABI.json';
const contractAddress = '0x4C43424ED5294C1F00960F76a19A499a8C4E5D7D';


function Home() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });

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
              <UserDetails userDetails={userDetails} />
              <h2>Wallet Details</h2>
              <WalletDetails />
              <SimpleComponent />
	  {/* Use the ContractInteraction component */}
            <ContractRead
              contractAddress={contractAddress}
              contractABI={contractABI}
              functionName="getName"
            />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </WagmiConfig>
  );
}

export default Home;

