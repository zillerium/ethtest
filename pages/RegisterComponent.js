// RegisterComponent.js
import React from 'react';
import ContractWrite from '../components/ContractWrite';
import { Button } from 'react-bootstrap';

function RegisterComponent({ contractAddress, contractABI, execWrite, setExecWrite }) {
  return (
    <div>
	  <h2>Register your name</h2>
      {execWrite && (
        <ContractWrite
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="registerName"
        />
      )}
      <Button variant="primary" onClick={() => setExecWrite(true)}>
        Register Name
      </Button>
    </div>
  );
}

export default RegisterComponent;

