import { useState } from 'react'
import { ethers } from 'ethers';
import realestateabi from './tokenizeRealestate.json'
import nabi from './nft.json'
import { TextField, Card, CardContent, Grid, Button, Box } from '@mui/material';
import Container from '@mui/material/Container';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk5Yzk2YzVhOWE4NTI0RmE2ODlBNTEwN0M3MzJGZmExNzg4QUQyMWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA2NTcwNzQ5NDUsIm5hbWUiOiJuZXdhcGl3b3JrIn0.tJ0CvOzG8yf4ZUku8yekEqSDU928cYYeBsmO9R2PcHk';
const client = new Web3Storage({ token }) 

export default function AddFasset() {
  const [hasError, setError] = useState(false);
  const [signer, setSigner] = useState();
  const [image, setImage] = useState('');
  const [imagename, setImagename] = useState('');
  const [addfasset, setaddfasset] = useState({
    nftaddr:"",
    assetid: "",
    // assetcontact:"",
    tokenid: "",
    fassetsize: "",
    fassetprice: "",
    fassetrentcost: "",
  });

  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const fileInput = document.querySelector('input[type="file"]')
    const name= document.querySelector('input[type=file]').files[0].name
    const cid = await client.put(fileInput.files)
    console.log(cid)
    setImage(cid);
    setImagename(name);
    
    
    
  }

  function addbsEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setaddfasset((prevalue) => {
      console.log(prevalue);

      return {
        ...prevalue,
        [name]: value,

      };

    })
  }

  async function AddFAsset(e) {
    e.preventDefault();
    try{
    // const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
    const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    const cabi = realestateabi.abi;
    const nftabi = nabi.abi;
    const contract = new ethers.Contract(contractAddress, cabi, signer);
    // const _location = addasset.assetlocation;
    // const _contact = addasset.assetcontact;
    const _fassetsize = addfasset.fassetsize;
    const _fassetprice = addfasset.fassetprice;
    const _fassetrentcost = addfasset.fassetrentcost;
    const _tokenid = addfasset.tokenid;
    const _assetid = addfasset.assetid;
    const _nftaddr = addfasset.nftaddr;
    const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize);
    
    const imageuri = image;
    const nftcontract = new ethers.Contract(_nftaddr, nftabi, signer);
    await nftcontract.setApprovalForAll(contractAddress, true)
    // const locationbytes = ethers.utils.formatBytes32String(_location) ;
    // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
    
    const caddbs = await contract.addfractionasset(imageuri,imagename,_nftaddr,_fassetprice, _assetid, _fassetrentcost, fassetsizebytes, _tokenid).then((r) => {
      console.log(r);
    });
  } catch(e){
    console.log(e);
    setError(true);
  }

  }
  async function connect() {
    if (typeof window.ethereum !== undefined) {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        const Provider = new ethers.providers.Web3Provider(window.ethereum);
        // setProvider(Provider);
        setSigner(Provider.getSigner());

      } catch (e) {
        console.log(e);
      }
    }

  }

  return (
    <>
     {hasError ? (
        <>
        <Box sx={{alignItems:'center',color:'red',ml:'450px',mt:'50px'}}>
          {"Error: connect your address to ethereum goerli test network/sender is not owner/nft id already exist"}
          </Box>
          <Box sx={{alignItems:'center',ml:'45%',mt:'50px'}}> 
          <Button variant='contained' type="submit" onClick={connect}> connect wallet </Button>
          </Box>
        </>
      ) : (
        <Container>
      <Box sx={{ marginLeft: '550px', marginTop: '10px', marginBottom: '10px' }}>
        <Button type="submit" variant='contained' color='primary' onClick={connect}> connect wallet </Button>
      </Box>


      <form onSubmit={AddFAsset}>
        <Card sx={{ maxWidth: 450, margin: '0 auto', padding: '20px,5px' }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
                <Box sx={{ marginBottom: '5px', marginLeft: '55px' }}>
                  <Button color="secondary" variant="contained" component="label">
                    Upload Fractionasset image
                    <input onChange={uploadToIPFS} hidden accept="image/*" multiple type="file" />
                  </Button>
                </Box>
                <TextField
                  type="text"
                  placeholder='Enter nft address'
                  name='nftaddr'
                  onChange={addbsEvent}
                  value={addfasset.nftaddr}
                  variant='outlined'
                  fullWidth required
                />

                <TextField
                  type="number"
                  placeholder='Enter assetid'
                  name='assetid'
                  onChange={addbsEvent}
                  value={addfasset.assetid}
                  fullWidth required
                />
                <TextField
                  type="number"
                  placeholder='Enter nft tokenid'
                  name='tokenid'
                  onChange={addbsEvent}
                  value={addfasset.tokenid}
                  fullWidth required
                />


                <TextField
                  type="number"
                  placeholder='Enter fractionasset price'
                  name='fassetprice'
                  onChange={addbsEvent}
                  value={addfasset.fassetprice}
                  fullWidth required
                />
                <TextField
                  type="number"
                  placeholder='Enter fractionasset rentcost'
                  name='fassetrentcost'
                  onChange={addbsEvent}
                  value={addfasset.fassetrentcost}
                  fullWidth required
                />
                <TextField
                  type="text"
                  placeholder='Enter fractionasset size'
                  name='fassetsize'
                  onChange={addbsEvent}
                  value={addfasset.fassetsize}
                  fullWidth required
                />

                <Box sx={{ marginTop: '20px', marginLeft: '130px' }}>

                  <Button type="submit" variant='contained' color='primary'>addAsset</Button>
                </Box>

              </Grid>
            </Grid>
          </CardContent>

        </Card>



      </form>
      </Container>

)}


    </>

  );
};