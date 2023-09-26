import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import NewUserNameInput from "../components/NewUserNameInput";
import { WagmiConfig } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
import ContractWrite from "../components/ContractWrite";
import RegisterComponent from "./RegisterComponent";
import ContractDeregister from "../components/ContractDeregister";
import config from "../wagmi/wagmiConfignew";
import WalletControls from "../components/WalletControls";
import UserDetails from "../components/UserDetails";
import WalletDetails from "../components/WalletDetails";
import ContractRead from "../components/ContractRead";
import LoadImageIpfs from "../components/LoadImageIpfs";
import contractABI from "../lib/contractABI.json";
import { Button } from "react-bootstrap";
import DeregisterComponent from "./DeregisterComponent";
import ReadContractComponent from "./ReadContractComponent";
import TransferNamePage from "./TransferNamePage";

const contractAddress = "0xE764443b60F45A4a4De7499645E59278f17536Bb";

function Home() {
  const [execWrite, setExecWrite] = useState(false);
  const [execTransfer, setExecTransfer] = useState(false);
  const [execDeregister, setExecDeregister] = useState(false);
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [ipfsImageHash, setIpfsImageHash] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [userAddressName, setUserAddressName] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    // Add more user details fields here
  });
  const [newUserName, setNewUserName] = useState("");
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
          setExecDeregister,
          execTransfer,
          setExecTransfer,
          receiverAddress,
          setReceiverAddress,
          ipfsImageHash,
          setIpfsImageHash,
        }}
      >
        <Container className="bg-black text-light">
          <Card bg="black" text="light">
            <Card.Header>
              <Row>
                <Col sm={8}>
                  {" "}
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
                    ipfsImageHash={ipfsImageHash}
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  {ipfsImageHash}
                  {userAddress ? (
                    <RegisterComponent
                      contractAddress={contractAddress}
                      contractABI={contractABI}
                      execWrite={execWrite}
                      setExecWrite={setExecWrite}
                      newUserName={newUserName}
                      setNewUserName={setNewUserName}
                    />
                  ) : (
                    <p>Connect to your wallet to register your name.</p>
                  )}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  {userAddress ? (
                    <DeregisterComponent
                      contractAddress={contractAddress}
                      contractABI={contractABI}
                      execDeregister={execDeregister}
                      setExecDeregister={setExecDeregister}
                    />
                  ) : (
                    <p>Connect your wallet to deregister your name.</p>
                  )}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  {userAddress ? (
                    <TransferNamePage
                      contractAddress={contractAddress}
                      contractABI={contractABI}
                      execTransfer={execTransfer}
                      setExecTransfer={setExecTransfer}
                      receiverAddress={receiverAddress}
                      setReceiverAddress={setReceiverAddress}
                    />
                  ) : (
                    <p>Connect your wallet to transfer your name.</p>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid lightgrey",
                      padding: "10px",
                    }}
                  >
                    <LoadImageIpfs />
                  </div>
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

