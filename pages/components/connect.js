import { useState } from 'react'
import {ethers} from 'ethers';
// import realestateabi from './abi'

export default function Connect(){
    const[signer,setSigner] = useState();

    async function connect(){
        if(typeof window.ethereum !== undefined){
          try{
            await ethereum.request({method:  "eth_requestAccounts" });
            // const provider = new ethers.providers.Web3Provider(window.ethereum);
            const Provider = new ethers.providers.Web3Provider(window.ethereum);
            // setProvider(Provider);
            setSigner(Provider.getSigner());
    
          }catch(e){
            console.log(e);
          }
        }
    
      }

    return(
        <>
        <h1> hello almur </h1>
        <button type = "submit" onClick={connect}> connect </button>
        </>

    );
};