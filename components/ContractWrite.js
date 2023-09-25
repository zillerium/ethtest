import React, { useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function ContractWrite({ contractAddress, contractABI }) {
  const { newUserName, userAddress, execWrite, setExecWrite, ipfsImageHash } = useContext(WalletContext);

  const argArr = [newUserName, ipfsImageHash];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'registerName',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const [writeError, setWriteError] = React.useState(null);
  const [txnStatus, setTxnStatus] = React.useState(null);


  const registerName = async () => {
    try {
      const res = await write?.();
      console.log('-- res', res);
      setTxnStatus("txn started on the blockchain");
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
          Confirm Registration
        </Button>
      </div>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
      {txnStatus && !writeError && !error && (<div>Txn Status: {txnStatus}</div>)}
       </>
  );
}

export default ContractWrite;
