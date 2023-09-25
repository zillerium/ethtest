import React, { useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function ContractDeregister({ contractAddress, contractABI }) {
  const { newUserName, userAddress, execDeregister, setExecDeregister } = useContext(WalletContext);

  const argArr = [];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'deregisterName',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const [writeError, setWriteError] = React.useState(null);

  const deregisterName = async () => {
    try {
      const res = await write?.();
      console.log('-- res', res);
    } catch (err) {
      console.log('---- err', err);
      setWriteError(err.message);
    }
  };

  if (isSuccess) {
     setExecDeregister(false);
  }

  return (
    <>
      <div>
        <Button variant="primary" onClick={deregisterName}>
         Confirm Deregistration 
        </Button>
      </div>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
    </>
  );
}

export default ContractDeregister;

