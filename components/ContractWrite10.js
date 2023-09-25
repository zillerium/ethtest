import React, { useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../pages/WalletContext';
import { Button } from 'react-bootstrap';

function ContractWrite({ contractAddress, contractABI }) {
  const { newUserName, userAddress, execWrite, setExecWrite } = useContext(WalletContext);

  const argArr = [newUserName];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'registerName',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const [writeError, setWriteError] = React.useState(null);

  const registerName = async () => {
    try {
      const res = await write?.();
      console.log('-- res', res);
    } catch (err) {
      console.log('---- err', err);
      setWriteError(err.message);
    }
  };

  if (isSuccess) {
     setExecWrite(false);
  }

  return (
    <>
      <div>
        <Button variant="primary" onClick={registerName}>
          Register Contract Name
        </Button>
      </div>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
    </>
  );
}

export default ContractWrite;

