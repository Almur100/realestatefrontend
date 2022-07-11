import { useState } from 'react'
import {ethers} from 'ethers';
import NFTabi from './nftabi'

export default function mintnft(){
    // const[signer,setSigner] = useState();
    const[tokenuri,settokenuri] = useState("")
        // nftaddr:"",
     

      function addbsEvent(e){
        e.persist();
        console.log(e.target.value);
        
        // console.log(e.currentTarget.checked);
        settokenuri(e.target.value);
        
      }

      async function nftmint(e){
        e.preventDefault();    
          const contractAddress = "0x13b3673DfE0d5bAF43508b812a444083b41E87eF";
        const abi = NFTabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        // const _location = addasset.assetlocation;
        // const _contact = addasset.assetcontact;
        // const _fassetsize = addfasset.fassetsize;
        // const _fassetprice = addfasset.fassetprice;
        // const _fassetrentcost = addfasset.fassetrentcost;
        const uri = tokenuri.fassetid;
        // const _assetid = setsellon.assetid;
        // const locationbytes = ethers.utils.formatBytes32String(_location) ;
        // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        // const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.mint(uri).then((r)=>{
            console.log(r);
          });
    
      }
      
    return(
        <>
           <input
      type = "text"
      
      placeholder='Enter token uri'
      
      onChange={addbsEvent}
      value={tokenuri}
      />
    <button type = "submit" onClick={nftmint}> mintnft </button>

        
        
        
        
        </>

  
  

  

    );
};