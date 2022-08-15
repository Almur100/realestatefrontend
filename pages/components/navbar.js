import Link from 'next/link';
import { useState } from 'react'
import realestateabi from './abi'
import NFTabi from './nftabi'
import {ethers} from 'ethers';


export default function Navbar(){
  // const[signer,setSigner] = useState();
  const [nft, setNFT] = useState()
  const [realestate, setrealestate] = useState()
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      // setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
        const abi = realestateabi;
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(contractAddress, realestateabi, signer)
    setrealestate(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    // setLoading(false)
  }
  


    return(
        <>
        <nav> 
     <ul>
       <Link href="/">
         <a>Home</a>
       </Link>
       <Link href="/components/addbuyerseller">
         <a>AddbuyerSeller realestate={realestate} </a>
       </Link>
       <Link href="/components/addasset">
         <a>addasset</a>
       </Link>
       <Link href="/components/addfractionasset">
         <a>AddFasset</a>
       </Link>
       <Link href="/components/buyasset">
         <a>BuyAsset</a>
       </Link>
       <Link href="/components/sellon">
         <a>SellOn</a>
       </Link>
       <Link href="/components/selloff">
         <a>selloff</a>
       </Link>
       <Link href="/components/subscribe">
         <a>Subscribe</a>
       </Link>
       <Link href="/components/addbuyasset">
         <a>addBuyAsset</a>
       </Link>
       <button type = "submit" onClick={web3Handler}> connect </button> 
    
   
    </ul>
   </nav> 
        </>

    )
}