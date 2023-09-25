import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import NewUserNameInput from '../components/NewUserNameInput';
import { WagmiConfig } from 'wagmi';
import { WalletContext } from './WalletContext';
import ContractWrite from '../components/ContractWrite';
import ContractDeregister from '../components/ContractDeregister';
import config from '../wagmi/wagmiConfignew';
import WalletControls from '../components/WalletControls';
import UserDetails from '../components/UserDetails';
import WalletDetails from '../components/WalletDetails';
import ContractRead from '../components/ContractRead';
import contractABI from './contractABI.json';
import { Button } from 'react-bootstrap';

const contractAddress = '0xB9A1589E9E84bc236Eddf8fDa1352795c399dcf9';

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
              <Row>
                <Col>
	  { execWrite && (       <NewUserNameInput />)}
                  <div>
                    <div>Name Registry {userAddress}, {newUserName}</div>
                    {userAddressName}
	          </div>
	       </Col>
	      </Row>
	      <Row>
	        <Col>
	           <div>
                    {readContract && userAddress &&  (
                      <ContractRead
                        contractAddress={contractAddress}
                        contractABI={contractABI}
                        functionName="getName"
                        userAddress={userAddress}
                      />)}
	           </div>
	  readcontract - {readContract}
	  {userAddress}
	  <div>
                      <Button variant="primary" onClick={handleReadContractClick}>Read Contract</Button>
                    <Button variant="primary" onClick={handleReadContractClickFalse}>Reset Contract</Button>
                  </div>
	  { execWrite && (<ContractWrite
                    contractAddress={contractAddress}
                    contractABI={contractABI}
                    functionName="registerName"
                  />)}
                      <Button variant="primary" onClick={changeExecWrite}>Register Name</Button>
                </Col>
              </Row>
	  <Row>
             <Col>
      { execDeregister && (<ContractDeregister
                    contractAddress={contractAddress}
                    contractABI={contractABI}
                    functionName="deregisterName"
                  />)}
	            <Button variant="primary" onClick={()=>setExecDeregister(true)}>Deregister Name</Button>
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

