// ReadContractComponent.js
import React from 'react';
import ContractRead from '../components/ContractRead';
import { Button } from 'react-bootstrap';

function ReadContractComponent({
  contractAddress,
  contractABI,
  readContract,
  setReadContract,
  userAddress,
  userAddressName
}) {
  return (
    <div>
	  <h2>Read your name</h2>
      {readContract && userAddress && (
        <ContractRead
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="getName"
          userAddress={userAddress}
        />
      )}
      {userAddressName}
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

