import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import NewUserNameInput from '../components/NewUserNameInput';
import { WagmiConfig } from 'wagmi';
import { WalletContext } from './WalletContext';
import ContractWrite from '../components/ContractWrite';
import RegisterComponent from './RegisterComponent';
import ContractDeregister from '../components/ContractDeregister';
import config from '../wagmi/wagmiConfignew';
import WalletControls from '../components/WalletControls';
import UserDetails from '../components/UserDetails';
import WalletDetails from '../components/WalletDetails';
import ContractRead from '../components/ContractRead';
import contractABI from './contractABI.json';
import { Button } from 'react-bootstrap';
import DeregisterComponent from './DeregisterComponent';
import ReadContractComponent from './ReadContractComponent';

const contractAddress = '0xdf80612cd1C9C4D7Da582A4161a71c1ef42F119d';

function Home() {
  const [execWrite, setExecWrite] = useState(false);
  const [execDeregister, setExecDeregister] = useState(false);
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressName, setUserAddressName] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });
  const [newUserName, setNewUserName] = useState('');
  const [shouldRegister, setShouldRegister] = useState(false);

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

  const handleReadContractClick = () => {
    setReadContract(true);
  };

  const handleReadContractClickFalse = () => {
    setReadContract(false);
  };

  const changeExecWrite = () => {
    setExecWrite(true);
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
	  execWrite,
  	  setExecWrite,
	  execDeregister,
	  setExecDeregister
        }}
      >
        <Container className="bg-black text-light">
          <Card bg="black" text="light">
            <Card.Header>
              <Row>
                <Col sm={8}> {/* Adjust the column size as needed */}
                  <h1>Name Registry for Wallets</h1>
                </Col>
                <Col sm={4} className="text-left">
                  <WalletControls />
                </Col>
              </Row>
              <WalletDetails />
            </Card.Header>
            <Card.Body>
	  <hr />
	      <Row>
	  <Col>
              <ReadContractComponent
                contractAddress={contractAddress}
                contractABI={contractABI}
                readContract={readContract}
                setReadContract={setReadContract}
                userAddress={userAddress}
                userAddressName={userAddressName}
              />
            </Col>
              </Row>
	  <hr />
	  <Row>
            <Col>
	      <RegisterComponent
                 contractAddress={contractAddress}
                 contractABI={contractABI}
                 execWrite={execWrite}
                 setExecWrite={setExecWrite}
                 newUserName={newUserName}
                 setNewUserName={setNewUserName}
              />
	    </Col>
	  </Row>
	  <hr />
	  <Row>
             <Col>
	          <DeregisterComponent
            contractAddress={contractAddress}
            contractABI={contractABI}
            execDeregister={execDeregister}
            setExecDeregister={setExecDeregister}
          />

	     </Col>
	  </Row>
            </Card.Body>
          </Card>
        </Container>
      </WalletContext.Provider>
    </WagmiConfig>
  );
}

export default Home;

