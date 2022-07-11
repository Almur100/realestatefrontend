import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
// import Connect from './components/connect.js';
import { useState } from 'react'
import {ethers} from 'ethers';
import AddbuyerSeller from './components/addbuyerseller';
import Addasset from './components/addasset';
import AddFasset from './components/addfractionasset';
import BuyAsset from './components/buyasset';


import SellOn from './components/sellon';
import SellOf from './components/selloff';
import Subscribe from './components/subscribe';
// import mintnft from './components/mintnft';
// import addBuyAsset from './components/addbuyasset';
// import { Nav } from 'react-bootstrap';

export default function Home() {
  // const[signer,setSigner] = useState();

  // async function connect(){
  //   if(typeof window.ethereum !== undefined){
  //     try{
  //       await ethereum.request({method:  "eth_requestAccounts" });
  //       // const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const Provider = new ethers.providers.Web3Provider(window.ethereum);
  //       // setProvider(Provider);
  //       setSigner(Provider.getSigner());

  //     }catch(e){
  //       console.log(e);
  //     }
  //   }

  // }

  return (
    <>
    {/* <button type = "submit" onClick={connect}> connect </button> */}


    
    
    <AddbuyerSeller/>
    <Addasset/>
    <AddFasset/>
    <BuyAsset/>
    <SellOn/>
    <SellOf/>
    <Subscribe/>
    <addBuyAsset/>
    
    </> 
    
  )
}
