// Home.js
import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap'; // Import Button for the Connect button
import NewUserNameInput from '../components/NewUserNameInput';
import { WagmiConfig } from 'wagmi';
import { WalletContext } from './WalletContext';
import ContractWrite from '../components/ContractWrite';
import config from '../wagmi/wagmiConfignew';
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
              <Row>
                <Col>
                  <h1>
                    Name Registry for Wallets{' '}
                    <Button variant="primary" onClick={() => console.log('Connect clicked')}>
                      Connect Wallet
                    </Button>
                  </h1>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <NewUserNameInput />
              <Row>
                <Col>
                  <div>Wallet Address: {userAddress}</div>
                </Col>
                <Col>
                  <div>Network: Goerli</div>
                  <div>Balance: {userAddressName}</div>
                </Col>
              </Row>
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

