import { useState } from 'react'
import {ethers} from 'ethers';
import realestateabi from './abi'

export default function AddFasset(){
    const[signer,setSigner] = useState();
    const[addfasset,setaddfasset] = useState({
        // nftaddr:"",
        assetid:"",
        // assetcontact:"",
        tokenid:"",
        fassetsize:"",
        fassetprice:"",
        fassetrentcost:"",
      });

      function addbsEvent(event){
        console.log(event.target.value);
        console.log(event.target.name);
        const {name,value} = event.target;
    
        setaddfasset((prevalue)=>{
          console.log(prevalue);
    
          return {
            ...prevalue,
            [name]:value,
    
          };
    
        })
      }

      async function AddFAsset(e){
        e.preventDefault();    
          const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        // const _location = addasset.assetlocation;
        // const _contact = addasset.assetcontact;
        const _fassetsize = addfasset.fassetsize;
        const _fassetprice = addfasset.fassetprice;
        const _fassetrentcost = addfasset.fassetrentcost;
        const _tokenid = addfasset.tokenid;
        const _assetid = addfasset.assetid;
        // const locationbytes = ethers.utils.formatBytes32String(_location) ;
        // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.addAsset(_fassetprice,_assetid,_fassetrentcost,fassetsizebytes,_tokenid).then((r)=>{
            console.log(r);
          });
    
      }
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
       
       <form onSubmit={AddFAsset}> 
       <input
      type = "number"
      placeholder='Enter assetid'
      name='assetid'
      onChange={addbsEvent}
      value={addfasset.assetid}
    />
       <input
      type = "number"
      placeholder='Enter nft tokenid'
      name='tokenid'
      onChange={addbsEvent}
      value={addfasset.tokenid}
    />              
   
    <br/>
    
    <input
      type = "number"
      placeholder='Enter fractionasset price'
      name='fassetprice'
      onChange={addbsEvent}
      value={addfasset.fassetprice}
    />
    <input
      type = "number"
      placeholder='Enter fractionasset rentcost'
      name='fassetrentcost'
      onChange={addbsEvent}
      value={addfasset.fassetrentcost}
    />
    <input
      type = "text"
      placeholder='Enter fractionasset size'
      name='fassetsize'
      onChange={addbsEvent}
      value={addfasset.fassetsize}
    />
   
    <br/>
    <button type = "submit">addfractionasset</button>  
    <button type = "submit" onClick={connect}> connect </button>
  
  

   </form>
        
        </>

    );
};