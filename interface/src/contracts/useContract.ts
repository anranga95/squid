import { IDeployment } from "./deployment.interface";
import deploymentJson from './localhost/PlayerCard.json';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from 'react';
import { PlayerCard } from "./typechain/PlayerCard";

export const useGreeterContract = (active: boolean) => {
  const [contractInstance, setContractInstance] = useState(null);
  const { account, connector, library } = useWeb3React();
  // const deployments = deploymentJson as IDeployment;

  const initializeReadOnly = () => {
    let provider = ethers.getDefaultProvider("http://localhost:8545");
    const cardContract = new ethers.Contract(
        deploymentJson.address,
        deploymentJson.abi, 
        provider
      );
    
    setContractInstance(cardContract);
  } 

  const initializeSigner = async () => {
    if(!library) return;
      // TODO: replace with contract.connect?
      const signer = await library.getSigner(account);
      const signerInstance = new ethers.Contract(
        deploymentJson.address,
        deploymentJson.abi, 
        signer
      );

      setContractInstance(signerInstance);
  }

  useEffect(() => {
    if(account && library) {
      initializeSigner();
    } else {
      initializeReadOnly();
    }
  }, [library]);

  return contractInstance as PlayerCard;
}