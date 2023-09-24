import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import UserDetailsInput from '../components/UserDetailsInput';
import { WagmiConfig } from 'wagmi';
import {WalletContext} from './WalletContext';
import config from '../wagmi/wagmiConfignew';
import WalletControls from '../components/WalletControls';
import UserDetails from '../components/UserDetails';
import WalletDetails from '../components/WalletDetails';
import ContractRead from '../components/ContractRead';
import SimpleComponent from '../components/SimpleComponent';
import contractABI from './contractABI.json';
const contractAddress = '0xd8576Aab222e10c7404042C95CBa1cC449622E56';


function Home() {
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userAddressName, setUserAddressName] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Add more user details fields here
  });

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

  const handleReadContractClick = () => {
      setReadContract(true); // Updated state variable name
  };

  const handleReadContractClickFalse = () => {
      setReadContract(false); // Updated state variable name
  };
  return (
    <WagmiConfig config={config}>
	  <WalletContext.Provider value={{
		  userAddress, setUserAddress,
              userAddressName, setUserAddressName
	  }} >
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
	  {userAddress}
	  {userAddressName}
{readContract && contractAddress ? ( // Conditionally render ContractRead component
                <ContractRead
                  contractAddress={contractAddress}
                  contractABI={contractABI}
                  functionName="getName"
	          userAddress={userAddress}
                />
              ) : (
                <button onClick={handleReadContractClick}>Read Contract</button>
	      )}
                <button onClick={handleReadContractClickFalse}>Rset Contract</button>
            </div>
          </Card.Body>
        </Card>
      </Container>
	</WalletContext.Provider>
    </WagmiConfig>
  );
}

export default Home;

