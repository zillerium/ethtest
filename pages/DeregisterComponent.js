// DeregisterComponent.js
import React from 'react';
import ContractDeregister from '../components/ContractDeregister';
import { Button } from 'react-bootstrap';

function DeregisterComponent({ contractAddress, contractABI, execDeregister, setExecDeregister }) {
  return (
    <div>
	  <h2>Deregister your name</h2>
      {execDeregister && (
        <ContractDeregister
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="deregisterName"
        />
      )}
      <Button variant="primary" onClick={() => setExecDeregister(true)}>
        Deregister Name
      </Button>
    </div>
  );
}

export default DeregisterComponent;

