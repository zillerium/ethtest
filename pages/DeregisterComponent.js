// DeregisterComponent.js
import React from "react";
import ContractDeregister from "../components/ContractDeregister";
import { Button } from "react-bootstrap";

function Spacer({ height }) {
  return <div style={{ height: height }} />;
}

function DeregisterComponent({
  contractAddress,
  contractABI,
  execDeregister,
  setExecDeregister,
}) {
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
      <Spacer height="20px" />
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => setExecDeregister(true)}
      >
        Deregister Name
      </Button>
    </div>
  );
}

export default DeregisterComponent;

