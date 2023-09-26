import React, { useState, useEffect } from "react";
import ContractRead from "../components/ContractRead";
import { Button, Form } from "react-bootstrap";

function ReadContractComponent({
  contractAddress,
  contractABI,
  userAddress,
  userAddressName,
  ipfsImageHash,
}) {
  // Local state to manage the input value
  const [inputUserAddress, setInputUserAddress] = useState("");
  const [shouldRead, setShouldRead] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Use useEffect to update inputUserAddress whenever userAddress changes
  useEffect(() => {
    setInputUserAddress(userAddress);
  }, [userAddress]);

  // Function to handle change in input field
  const handleInputChange = (e) => {
    setInputUserAddress(e.target.value);
    setShouldRead(false); // reset the shouldRead state whenever text changes
    setButtonDisabled(false); // re-enable the button when the textbox content changes
  };

  // Function to handle button click
  const handleButtonClick = () => {
    setShouldRead(true);
    setButtonDisabled(true); // disable the button when clicked
  };

  return (
    <div>
      <h2>Read your name</h2>
      <Form.Group controlId="userAddress">
        <Form.Label>
          Wallet Address (change the address to read again):
        </Form.Label>
        <Form.Control
          type="text"
          value={inputUserAddress}
          onChange={handleInputChange}
          placeholder="Enter address here"
        />
      </Form.Group>
      {shouldRead && inputUserAddress && (
        <ContractRead
          contractAddress={contractAddress}
          contractABI={contractABI}
          functionName="getName"
          userAddress={inputUserAddress}
        />
      )}
      <h4>Registered Profile: {userAddressName}</h4>
      {ipfsImageHash && (
        <div>
          IPFS Image Profile hash:{" "}
          <a
            href={`https://ipfs.io/ipfs/${ipfsImageHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ipfsImageHash}
          </a>
        </div>
      )}

      <div>
        <Button
          variant="primary"
          onClick={handleButtonClick}
          disabled={buttonDisabled}
        >
          Read Contract
        </Button>
      </div>
    </div>
  );
}

export default ReadContractComponent;

