import React, { useState } from 'react';
import ContractRead from '../components/ContractRead';
import { Button, Form } from 'react-bootstrap';

function ReadContractComponent({
  contractAddress,
  contractABI,
  readContract,
  setReadContract,
  userAddress,
  userAddressName
}) {
  // local state to manage the input value
  const [inputUserAddress, setInputUserAddress] = useState('');

  // function to handle change in input field
  const handleInputChange = (e) => {
    setInputUserAddress(e.target.value);
  };

  return (
    <div>
      <h2>Read your name</h2>
      <Form.Group controlId="userAddress">
        <Form.Label>Wallet Address:</Form.Label>
        <Form.Control
          type="text"
          value={inputUserAddress || userAddress}
          onChange={handleInputChange}
          placeholder="Enter address here"
        />
      </Form.Group>
      {readContract && (inputUserAddress || userAddress) && (
        <ContractRead
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="getName"
          userAddress={inputUserAddress || userAddress}
        />
      )}
      <h4>Registered Name: {userAddressName}</h4>
      <div>
        <Button variant="primary" onClick={() => setReadContract(true)}>
          Read Contract
        </Button>
        <Button variant="primary" onClick={() => setReadContract(false)}>
          Reset Contract
        </Button>
      </div>
    </div>
  );
}

export default ReadContractComponent;

