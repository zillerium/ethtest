import React, { useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../pages/WalletContext';
import { Button } from 'react-bootstrap';

function ContractWrite({ contractAddress, contractABI }) {
  const { newUserName, userAddress } = useContext(WalletContext);

  const argArr = [newUserName];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'registerName',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const registerName = async () => {
    try {
      const res = await write?.();
      console.log('-- res', res);
    } catch (err) {
      console.log('---- err', err);
    }
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={registerName}>
          Register Name
        </Button>
      </div>
      {error && <div>Error in formatting {error.message}</div>}
    </>
  );
}

export default ContractWrite;

