// TransferNamePage.js
import React, { useState } from "react";
import TransferName from "../components/TransferName";
import { Button, Form } from "react-bootstrap";

function TransferNamePage({
  contractAddress,
  contractABI,
  execTransfer,
  setExecTransfer,
  receiverAddress,
  setReceiverAddress,
}) {
  return (
    <div>
      <h2>Transfer Name</h2>
      <Form.Group controlId="newAddress">
        <Form.Label>Receiver Address:</Form.Label>
        <Form.Control
          type="text"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          placeholder="receiver address"
        />
      </Form.Group>
      {execTransfer && (
        <TransferName
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="transferName"
        />
      )}
      <Button variant="primary" onClick={() => setExecTransfer(true)}>
        Transfer Name
      </Button>
    </div>
  );
}

export default TransferNamePage;

