import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useContractRead } from 'wagmi';

function ContractRead({ contractAddress, contractABI, functionName }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data } = await useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName,
      });

      setData(data);
    } catch (error) {
      setError(error);
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
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>Contract Data</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ContractRead;

