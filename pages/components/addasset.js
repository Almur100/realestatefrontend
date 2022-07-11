import { useState } from 'react'
import {ethers} from 'ethers';
import realestateabi from './abi'

export default function Addasset(){
    const[signer,setSigner] = useState();
    const[addasset,setaddasset] = useState({
        nftaddr:"",
        assetlocation:"",
        assetcontact:"",
        tokenid:"",
        fassetsize:"",
        fassetprice:"",
        fassetrentcost:"",
      });

      function addbsEvent(event){
        console.log(event.target.value);
        console.log(event.target.name);
        const {name,value} = event.target;
    
        setaddasset((prevalue)=>{
          console.log(prevalue);
    
          return {
            ...prevalue,
            [name]:value,
    
          };
    
        })
      }

      async function AddAsset(e){
        e.preventDefault();    
          const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        const _location = addasset.assetlocation;
        const _contact = addasset.assetcontact;
        const _fassetsize = addasset.fassetsize;
        const _fassetprice = addasset.fassetprice;
        const _fassetrentcost = addasset.fassetrentcost;
        const _tokenid = addasset.tokenid;
        const _nftaddr = addasset.nftaddr;
        const locationbytes = ethers.utils.formatBytes32String(_location) ;
        const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.addAsset(_nftaddr,_tokenid,locationbytes,contactbytes,_fassetprice,fassetsizebytes,_fassetrentcost).then((r)=>{
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
       
       <form onSubmit={AddAsset}> 
       <input
      type = "text"
      placeholder='Enter nft address'
      name='nftaddr'
      onChange={addbsEvent}
      value={addasset.nftaddr}
    />
       <input
      type = "number"
      placeholder='Enter nft tokenid'
      name='tokenid'
      onChange={addbsEvent}
      value={addasset.tokenid}
    />              
   <input
      type = "text"
      placeholder='Enter asset location'
      name='assetlocation'
      onChange={addbsEvent}
      value={addasset.assetlocation}
    />
    <br/>
    <input
      type = "text"
      
      placeholder='Enter asset contact'
      
      
      name='assetcontact'
      onChange={addbsEvent}
      value={addasset.assetcontact}
    />
    <input
      type = "number"
      placeholder='Enter fractionasset price'
      name='fassetprice'
      onChange={addbsEvent}
      value={addasset.fassetprice}
    />
    <input
      type = "number"
      placeholder='Enter fractionasset rentcost'
      name='fassetrentcost'
      onChange={addbsEvent}
      value={addasset.fassetrentcost}
    />
    <input
      type = "text"
      placeholder='Enter fractionasset size'
      name='fassetsize'
      onChange={addbsEvent}
      value={addasset.fassetsize}
    />
   
    <br/>
    <button type = "submit">addAsset</button>  
    <button type = "submit" onClick={connect}> connect </button>
  
  

   </form>
        
        </>

    );
};