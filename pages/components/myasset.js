import { useState, useEffect } from 'react'
import realestateabi from './tokenizeRealestate.json'
import { ethers } from 'ethers';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import Divider from '@mui/material/Divider';
import { Link } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk5Yzk2YzVhOWE4NTI0RmE2ODlBNTEwN0M3MzJGZmExNzg4QUQyMWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA2NTcwNzQ5NDUsIm5hbWUiOiJuZXdhcGl3b3JrIn0.tJ0CvOzG8yf4ZUku8yekEqSDU928cYYeBsmO9R2PcHk';
const client = new Web3Storage({ token })

// import Item from '@mui/material/Item';
// import {  CardContent, Card, Grid, Stack,Item } from '@mui/material';


export default function Myrealestate() {
    const [listedAsset, setListedAsset] = useState([])
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    const [hasError, setError] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true);
        }
    },[]);

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

    // const[buyasset,setbuyasset] = useState([])
    // const account= 0x5FbDB2315678afecb367f032d93F642f64180aa3


    const loadlistedAsset = async () => {
        try{
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0])
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        const Provider = new ethers.providers.Web3Provider(window.ethereum);
        Provider.on('accountsChanged', function (accounts) {
            account = accounts[0];
        });

        // setProvider(Provider);
        const signer = Provider.getSigner();
        const address = await signer.getAddress();
        console.log(address)
        const contractAddress = "0x27af769172979f8e2fcfb35dd57f9b5593b0d815";
        const cabi = realestateabi.abi;
        const contract = new ethers.Contract(contractAddress, cabi, signer);
        const Assetid = await contract.getid();
        let Listedasset = []
        // let myasset = []
        for (let indx = 1; indx <= Assetid; indx++) {
            const A = await contract.assetDetails(indx)


            const TA = await contract.gettokenizeasset(indx)
            const Length = TA.length
            for (let findx = 1; findx <= Length; findx++) {
                const owner = await contract.getfractionassetowner(indx, findx)
                // console.log(account)
                console.log(owner)
                if (address === owner) {



                    const FA = await contract.getfractionassetdetails(indx, findx)
                    const cid = FA.fassetimage
                    const cidimage = FA.imagename
                    
                      const imageURI = `https://${cid}.ipfs.dweb.link/${cidimage}`;
                      const url = imageURI


                    
                    
                    console.log(FA.nft)
                    // const num = ethers.BigNumber.from("1");
                    const num = A.id
                    const num1 = FA.assetPrice
                    const id = num.toString();
                    const price = num1.toString();
                    const Text = ethers.utils.parseBytes32String(FA.size)
                    const Text1 = ethers.utils.parseBytes32String(A.location)
                    let uid = 1;
                    // const account= "0x71c7656ec7ab88b098defb751b7401b5f6d8976f" 


                    let fasset = {
                        Uid:uid++,
                        image:url,
                        
                        location: Text1,
                        id: id,
                        contact: A.contact,
                        nft: FA.nft,
                        tokenid: FA.tokenid,
                        assetPrice: price,
                        size: Text,
                        rentPrice: FA.rentPrice,
                        assetowner: owner


                    }


                    Listedasset.push(fasset)
                }



            }

        }
        setLoading(false)
        setListedAsset(Listedasset)
    } catch(e){
        console.log(e)
        setError(true);


    }
        
} 

    



    useEffect(() => {
        loadlistedAsset()
    }, [])

    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Loading...</h2>
        </main>
      )





    return (
        <>
            {hasMetamask ? (
                hasError ? (
                    <>
                    <Box sx={{alignItems:'center',color:'red',ml:'450px',mt:'50px'}}>
                        {"Error: connect your address to ethereum goerli test network"}
                        </Box>
                        <Box sx={{alignItems:'center',ml:'45%',mt:'50px'}}> 
                        <Button variant='contained' type="submit" onClick={connect}> connect wallet </Button>
                        </Box>
                    </>

                ) : (
                    listedAsset.length>0 ?(


                    <Grid container>
                        {listedAsset.map((item, idx) => (
                            <Grid key={item.Uid} item sm={6} xs={12} md={6} lg={4}>
                                <Card sx={{ maxWidth: 345, ml: 1, padding: '20px,5px' }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={item.image}
                                        alt="green iguana"


                                    />


                                    <CardContent>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Stack sx={{ mb: "5px" }} direction="row" spacing={1}>
                                                <Button size="small" variant="contained">assetid {item.id}</Button>
                                                <Button size="small" variant="contained">fassetid {item.id}</Button>
                                                <Button size="small" variant="contained">tokenid {item.id}</Button>
                                            </Stack>
                                            <Stack sx={{ mb: "5px" }} direction="row" >
                                                <PlaceIcon />
                                                <Typography sx={{ color: 'success.dark', fontSize: 18, fontWeight: 'medium' }}>
                                                    west bengal,india</Typography>
                                            </Stack>

                                            <Stack sx={{ mb: "10px" }} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>

                                                <Box >
                                                    <Stack direction="row">
                                                        <AttachMoneyIcon />
                                                        <Typography sx={{ fontWeight: "medium" }}>
                                                            {item.assetPrice} AH Token
                                                        </Typography>
                                                    </Stack>
                                                </Box>

                                                <Box sx={{ fontWeight: "medium" }}>{item.size}</Box>



                                            </Stack>
                                            <Stack sx={{ mt: "5px" }} direction="row" spacing="">
                                                <Button size="small" variant="outlined">

                                                    <Link href={`https://etherscan.io/address/${item.nft}`} > nft address</Link>

                                                </Button>
                                                <Button size="small" variant='outlined'>
                                                    <Link href={`https://etherscan.io/address/${item.nft}`} >  owner address</Link>

                                                </Button>
                                            </Stack>

                                        </Box>

                                    </CardContent>
                                </Card>

                            </Grid>
                        ))}

                    </Grid>
                    ) : (
                        "You don't own any assets"
                    )
                )
            ) : (
                "pls install metamask"

            )}



        </>
    )
}