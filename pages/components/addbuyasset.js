import { useState } from 'react'
import {ethers} from 'ethers';
import realestateabi from './abi'

export default function addBuyAsset(){
    // const[signer,setSigner] = useState();
    const[addbuyfasset,setaddbuyfasset] = useState({
        // nftaddr:"",
        assetid:"",
        // assetcontact:"",
        fassetid:"",
        // fassetsize:"",
        // fassetprice:"",
        // fassetrentcost:"",
      });

      function addbsEvent(event){
        console.log(event.target.value);
        console.log(event.target.name);
        const {name,value} = event.target;
    
        setaddbuyfasset((prevalue)=>{
          console.log(prevalue);
    
          return {
            ...prevalue,
            [name]:value,
    
          };
    
        })
      }

      async function addBuyfasset(e){
        e.preventDefault();    
          const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        // const _location = addasset.assetlocation;
        // const _contact = addasset.assetcontact;
        // const _fassetsize = addfasset.fassetsize;
        // const _fassetprice = addfasset.fassetprice;
        // const _fassetrentcost = addfasset.fassetrentcost;
        const _fassetid = addbuyfasset.fassetid;
        const _assetid = addbuyfasset.assetid;
        // const locationbytes = ethers.utils.formatBytes32String(_location) ;
        // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        // const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.addbuyfsset(_assetid,_fassetid).then((r)=>{
            console.log(r);
          });
    
      }
      
    return(
        <>
       
       <form onSubmit={addBuyfasset}> 
       <input
      type = "number"
      placeholder='Enter assetid'
      name='assetid'
      onChange={addbsEvent}
      value={addbuyfasset.assetid}
    />
       <input
      type = "number"
      placeholder='Enter fraction assetid'
      name='fassetid'
      onChange={addbsEvent}
      value={addbuyfasset.fassetid}
    />              
   
   
    <br/>
    <button type = "submit">addBuyfAsset</button>  
  
  

   </form>
        
        </>

    );
};