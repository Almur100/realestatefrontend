import { useState } from 'react'
import { ethers } from 'ethers';
import realestateabi from './tokenizeRealestate.json'
import nabi from './nft.json'
import { TextField, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { padding } from '@mui/system';
import Container from '@mui/material/Container';
import { Web3Storage, getFilesFromPath } from 'web3.storage'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk5Yzk2YzVhOWE4NTI0RmE2ODlBNTEwN0M3MzJGZmExNzg4QUQyMWYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA2NTcwNzQ5NDUsIm5hbWUiOiJuZXdhcGl3b3JrIn0.tJ0CvOzG8yf4ZUku8yekEqSDU928cYYeBsmO9R2PcHk';
const client = new Web3Storage({ token })

export default function Addasset() {
  const [hasError, setError] = useState(false);
  const [image, setImage] = useState('');
  const [imagename, setImagename] = useState('');
  const [signer, setSigner] = useState();
  const [addasset, setaddasset] = useState({
    nftaddr: "",
    assetlocation: "",
    assetcontact: "",
    tokenid: "",
    fassetsize: "",
    fassetprice: "",
    fassetrentcost: "",
  });

  function addbsEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setaddasset((prevalue) => {
      console.log(prevalue);

      return {
        ...prevalue,
        [name]: value,

      };

    })
  }
  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const fileInput = document.querySelector('input[type="file"]')
    const name= document.querySelector('input[type=file]').files[0].name
    const cid = await client.put(fileInput.files)
    console.log(cid)
    setImage(cid);
    setImagename(name);
   
    
  }

  async function AddAsset(e) {
    e.preventDefault();
    try{
    // const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
    const contractAddress = "0x27af769172979f8e2fcfb35dd57f9b5593b0d815";
    const cabi = realestateabi.abi;
    const nftabi = nabi.abi;
    const contract = new ethers.Contract(contractAddress, cabi, signer);
    // const result = await client.add(JSON.stringify({image}))
    // const imageuri = `https://ipfs.infura.io/ipfs/${result.path}`
    // const imageuri= image;
    const _location = addasset.assetlocation;
    const _contact = addasset.assetcontact;
    const _fassetsize = addasset.fassetsize;
    const _fassetprice = addasset.fassetprice;
    const _fassetrentcost = addasset.fassetrentcost;
    const _tokenid = addasset.tokenid;
    const _nftaddr = addasset.nftaddr;
    const locationbytes = ethers.utils.formatBytes32String(_location);
    const contactbytes = ethers.utils.formatBytes32String(_contact);
    const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize);
    
    const imageuri = image;
    const nftcontract = new ethers.Contract(_nftaddr, nftabi, signer);
    await nftcontract.setApprovalForAll(contractAddress, true)
    const caddbs = await contract.addAsset(imageuri,imagename,_nftaddr, _tokenid, locationbytes, contactbytes, _fassetprice, fassetsizebytes, _fassetrentcost).then((r) => {
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
          {"Error reason : connect your address to ethereum goerli test network/your address not exist in marketplace"}
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

      <form onSubmit={AddAsset}>
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
                  value={addasset.nftaddr}
                  variant='outlined'
                  fullWidth required
                />

                <TextField
                  type="number"
                  placeholder='Enter nft tokenid'
                  name='tokenid'
                  onChange={addbsEvent}
                  value={addasset.tokenid}
                  variant='outlined'
                  fullWidth required
                />

                <TextField
                  type="text"
                  placeholder='Enter asset location'
                  name='assetlocation'
                  onChange={addbsEvent}
                  value={addasset.assetlocation}
                  variant='outlined'
                  fullWidth required
                />

                <TextField
                  type="text"

                  placeholder='Enter asset contact'


                  name='assetcontact'
                  onChange={addbsEvent}
                  value={addasset.assetcontact}
                  variant='outlined'
                  fullWidth required
                />
                <TextField
                  type="number"
                  placeholder='Enter fractionasset price'
                  name='fassetprice'
                  onChange={addbsEvent}
                  value={addasset.fassetprice}
                  variant='outlined'
                  fullWidth required
                />
                <TextField
                  type="number"
                  placeholder='Enter fractionasset rentcost'
                  name='fassetrentcost'
                  onChange={addbsEvent}
                  value={addasset.fassetrentcost}
                  variant='outlined'
                  fullWidth required
                />
                <TextField
                  type="text"
                  placeholder='Enter fractionasset size'
                  name='fassetsize'
                  onChange={addbsEvent}
                  value={addasset.fassetsize}
                  variant='outlined'
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