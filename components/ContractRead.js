import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function ContractRead({
  contractAddress,
  contractABI,
  functionName,
  userAddress,
}) {
  const { userAddressName, setUserAddressName, ipfsImageHash, setIpfsImageHash } = useContext(WalletContext);

  const config = {
    address: contractAddress,
    abi: contractABI,
    // overrides: {userAddress: userAddress},
    functionName: "getNameAndIpfsHash",
    args: [userAddress],
    //functionName: 'getContractUsdcBalance',
  };
  console.log("checl allowance 2 == ", config, contractAddress, userAddress);

  const { data, isLoading, isSuccess } = useContractRead(config);

  useEffect(() => {
    console.log("checl allowance == ", data);
    if (isSuccess) {
      if (data) {
        console.log("-------------------- data full ------ ", data);
        setUserAddressName(data[0]);
        setIpfsImageHash(data[1]);
	      
      }
    }
  }, [data]);

  if (isLoading) {
    // return <div>Loading ...</div>
  }
  return <div></div>;
}

export default ContractRead;

