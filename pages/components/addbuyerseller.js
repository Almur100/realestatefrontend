import { useState } from 'react'
import {ethers} from 'ethers';
import realestateabi from './abi'
import NFTabi from './nftabi'

export default function AddbuyerSeller(){
  const[signer,setSigner] = useState();
    // const[signer,setSigner] = useState();
    const[addbuyerseller,setaddbuyerseller] = useState({
        location:"",
        contact:"",
      });

      const[tokenuri,settokenuri] = useState("")

      function addbsEvent(event){
        console.log(event.target.value);
        console.log(event.target.name);
        const {name,value} = event.target;
    
        setaddbuyerseller((prevalue)=>{
          console.log(prevalue);
    
          return {
            ...prevalue,
            [name]:value,
    
          };
    
        })
      }

      function nftEvent(e){
        // e.persist();
        console.log(e.target.value);
        
        // console.log(e.currentTarget.checked);
        settokenuri(e.target.value);
        
      }

      async function AddbuyerSeller(e){
        e.preventDefault();    
          const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
        const contract = new ethers.Contract(contractAddress,abi,signer);
        const _location = addbuyerseller.location;
        const _contact = addbuyerseller.contact;
        const locationbytes = ethers.utils.formatBytes32String(_location) ;
        const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        const caddbs = await contract.addbuyerseller(locationbytes,contactbytes).then((r)=>{
            console.log(r);
          });
    
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
        const uri = tokenuri;
        // const _assetid = setsellon.assetid;
        // const locationbytes = ethers.utils.formatBytes32String(_location) ;
        // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
        // const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
        const caddbs = await contract.mint(uri).then((r)=>{
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
       
       <form onSubmit={AddbuyerSeller}>           
   <input
      type = "text"
      placeholder='Enter your location'
      name='location'
      onChange={addbsEvent}
      value={addbuyerseller.location}
    />
    <br/>
    <input
      type = "text"
      
      placeholder='Enter your contact'
      name='contact'
      onChange={addbsEvent}
      value={addbuyerseller.contact}
    />
   
    <br/>
    <button type = "submit">addbuyerseller</button>  
  
  

   </form>

   <input
      type = "text"
      
      placeholder='Enter token uri'
      
      onChange={nftEvent}
      value={tokenuri}
      />
    <button type = "submit" onClick={nftmint}> mintnft </button>
    <button type = "submit" onClick={connect}> connect </button> 


        
        </>

    );
};