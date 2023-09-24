// Home.js
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import NewUserNameInput from '../components/NewUserNameInput';
import { WagmiConfig } from 'wagmi';
import { WalletContext } from './WalletContext';
import ContractWrite from '../components/ContractWrite';
import config from '../wagmi/wagmiConfignew';
import WalletControls from '../components/WalletControls';
import UserDetails from '../components/UserDetails';
import WalletDetails from '../components/WalletDetails';
import ContractRead from '../components/ContractRead';
import contractABI from './contractABI.json';

const contractAddress = '0x0eDdFD965fbf3111078174612AD30065a2fA14D2';

function Home() {
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressName, setUserAddressName] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });
  const [newUserName, setNewUserName] = useState('');

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
    <WagmiConfig config={config}>
      <WalletContext.Provider
        value={{
          userAddress,
          setUserAddress,
          userAddressName,
          setUserAddressName,
          newUserName,
          setNewUserName,
        }}
      >
        <Container className="bg-black text-light">
          <Card bg="black" text="light">
            <Card.Header>
              <h1>Name Registry for Wallets</h1>
              <WalletControls />
                <WalletDetails />
            </Card.Header>
            <Card.Body>
              <NewUserNameInput />
              <div>
                <div>new user name {newUserName}</div>
                {userAddress}
                {userAddressName}
                {readContract && contractAddress ? (
                  <ContractRead
                    contractAddress={contractAddress}
                    contractABI={contractABI}
                    functionName="getName"
                    userAddress={userAddress}
                  />
                ) : (
                  <button onClick={handleReadContractClick}>Read Contract</button>
                )}
                <button onClick={handleReadContractClickFalse}>Reset Contract</button>
              </div>
              <ContractWrite
                contractAddress={contractAddress}
                contractABI={contractABI}
                functionName="registerName"
              />
            </Card.Body>
          </Card>
        </Container>
      </WalletContext.Provider>
    </WagmiConfig>
  );
}

export default Home;

