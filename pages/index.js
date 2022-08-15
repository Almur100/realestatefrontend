import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
// import Connect from './components/connect.js';
import { useState } from 'react'
import {ethers} from 'ethers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddbuyerSeller from './components/addbuyerseller';
import Addasset from './components/addasset';
import AddFasset from './components/addfractionasset';
import BuyAsset from './components/buyasset';
const image =new URL('./images/3158.jpg',import.meta.url);


import SellOn from './components/sellon';
import SellOf from './components/selloff';
import Subscribe from './components/subscribe';
import Navbar from './components/navbar';
// import Home from './components/home';
import ResponsiveAppBar from './components/appbar';
import Link from 'next/link';
import { color } from '@mui/system';
// import mintnft from './components/mintnft';
// import addBuyAsset from './components/addbuyasset';
// import { Nav } from 'react-bootstrap';

export default function Home() {
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

  return (
    <>
    <Box sx={{ 
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      height:'89vh' 
    }}>
      <Typography variant='h4' sx={{ml:'200px',pt:'100px',fontWeight: 'bold',color:' #034f84' }}>
        World's Leading Tokenize NFT RealEstate Marketplace
      </Typography>
      <Typography variant='h5' sx={{ml:'370px',pt:'20px', color:'green',fontWeight:'bold' }}>
        Our Mission is to automate realestate transaction
      </Typography>
      <Typography variant='h6' sx={{ml:'450px',pt:'20px',color:'#618685',fontWeight:'bold'}} >
        You can own a property in matter of minute
      </Typography>
      
     
    </Box>
     
    
    
    
   
  </>
  )
}
