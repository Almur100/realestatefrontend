import { useState } from 'react'
import {ethers} from 'ethers';
import realestateabi from './abi'

export default function SellOn(){
    const[signer,setSigner] = useState();
    const[sellon,setsellon] = useState({
        // nftaddr:"",
        assetid:"",
        // assetcontact:"",
        fassetid:"",
        // fassetsize:"",
        // fassetprice:"",
        // fassetrentcost:"",
      });

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
    
        setsellon((prevalue)=>{
          console.log(prevalue);
    
          return {
            ...prevalue,
            [name]:value,
    
          };
    
        })
      }
      function addbuyassetEvent(event){
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




      async function sellOn(e){
        e.preventDefault();    
          const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        // const _location = addasset.assetlocation;
        // const _contact = addasset.assetcontact;
        // const _fassetsize = addfasset.fassetsize;
        // const _fassetprice = addfasset.fassetprice;
        // const _fassetrentcost = addfasset.fassetrentcost;
        const _fassetid = sellon.fassetid;
        const _assetid = sellon.assetid;
        // const locationbytes = ethers.utils.formatBytes32String(_location) ;
        // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        // const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.sellon(_assetid,_fassetid).then((r)=>{
            console.log(r);
          });
    
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
       
       <form onSubmit={sellOn}> 
       <input
      type = "number"
      placeholder='Enter assetid'
      name='assetid'
      onChange={addbsEvent}
      value={sellon.assetid}
    />
       <input
      type = "number"
      placeholder='Enter fraction assetid'
      name='fassetid'
      onChange={addbsEvent}
      value={sellon.fassetid}
    />              
   
   
    <br/>
    <button type = "submit">sellon</button>  
  
  

   </form>

   <form onSubmit={addBuyfasset}> 
       <input
      type = "number"
      placeholder='Enter assetid'
      name='assetid'
      onChange={addbuyassetEvent}
      value={addbuyfasset.assetid}
    />
       <input
      type = "number"
      placeholder='Enter fraction assetid'
      name='fassetid'
      onChange={addbuyassetEvent}
      value={addbuyfasset.fassetid}
    />              
   
   
    <br/>
    <button type = "submit">addBuyfAsset</button>  
    <button type = "submit" onClick={connect}> connect </button>
  
  

   </form>
        
        
        </>

    );
};