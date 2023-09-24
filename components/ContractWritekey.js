import {useContext,  useEffect} from 'react'
import {  
          useContractWrite, usePrepareContractWrite} from "wagmi";
import {WalletContext} from '../pages/WalletContext'

import {Button} from 'react-bootstrap';


function ContractWrite(contractAddress, contractABI) {

	 const  {
		newUserName, userAddress
                } = useContext(WalletContext)

console.log("*************************************new user name == ", newUserName);
console.log("new user name == ", newUserName);
console.log("user address == ", userAddress);

        let argArr = [newUserName, userAddress  ];
  	    console.log("array ---- ", argArr, contractAddress);
            const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
                   abi: contractABI,
                   functionName: 'registerName',
                  // args:[contractNumber],
                   args: argArr
            })
            console.log(config);
            const {data, isLoading, isSuccess, write} = useContractWrite(config)
            if (isLoading) {
                return <div>Loading ...</div>
            }
            console.log(data)

            if (isSuccess) {
		    console.log("**** the contract was updated ****");
            }
    const registerName = async () => {
              console.log("------ pay now--");
	    try {
console.log("new user name == ", newUserName);
console.log("user address == ", userAddress);
		    console.log("--write", write);
		    console.log("--config", config);
		    console.log("--data", data);
		    console.log("--error", error);
                const res = await write?.();
		    console.log("-- res", res);
	    } catch (err) {
                console.log("---- err");
	    }
    }



    return (
        <>
        <div><Button  variant="primary" onClick={registerName}>Register Name</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}



export default ContractWrite;

