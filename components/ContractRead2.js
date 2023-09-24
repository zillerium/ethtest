// ContractRead.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useContractRead } from 'wagmi';

function ContractRead({ contractAddress, contractABI, functionName }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setErrorText(null);

    try {
      const { data } = await useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName,
      });

      setResult(data);
    } catch (error) {
      setErrorText(`Error fetching data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={fetchData}>
        Get Data
      </Button>
      {isLoading && <p>Loading...</p>}
      {errorText && <p>{errorText}</p>}
      {result !== null && (
        <div>
          <h3>Contract Data</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ContractRead;

