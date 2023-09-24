// index.js
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
import { AddressProvider}  from '../components/AddressContext'; // Import the context provider
const contractAddress = '0x4C43424ED5294C1F00960F76a19A499a8C4E5D7D';

function Home() {
  const [readContract, setReadContract] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

  const handleReadContractClick = () => {
    setReadContract(true);
  };

  const handleReadContractClickFalse = () => {
    setReadContract(false);
  };

  return (
    <AddressProvider> {/* Wrap your app with AddressProvider */}
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
                {readContract && contractAddress ? (
                  <ContractRead
                    contractAddress={contractAddress}
                    contractABI={contractABI}
                    functionName="getName"
	            userAddress={userAddress} // Pass userAddress to ContractRead

                  />
                ) : (
                  <button onClick={handleReadContractClick}>Read Contract</button>
                )}
                <button onClick={handleReadContractClickFalse}>Reset Contract</button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </WagmiConfig>
    </AddressProvider>
  );
}

export default Home;

