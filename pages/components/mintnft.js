import { useState } from 'react'
import { ethers } from 'ethers';
import nabi from './nft.json'
import { TextField, Card, CardContent, Grid, Button, Box } from '@mui/material';
import Container from '@mui/material/Container';

export default function Mintnft() {
  const [hasError, setError] = useState(false);
  const [signer, setSigner] = useState();
  const [tokenuri, settokenuri] = useState("")
  // nftaddr:"",


  function addbsEvent(e) {
    e.persist();
    console.log(e.target.value);

    // console.log(e.currentTarget.checked);
    settokenuri(e.target.value);

  }

  async function nftmint(e) {
    e.preventDefault();
    try {
      const contractAddress = "0x652F5f72f7FACeF14BDEA3257fc7c4A90E7c8651";
      // const contractAddress = "0x13b3673DfE0d5bAF43508b812a444083b41E87eF";
      const cabi = nabi.abi;
      const contract = new ethers.Contract(contractAddress, cabi, signer);
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
      const caddbs = await contract.mint(uri).then((r) => {
        console.log(r);
      });
    } catch (e) {
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
          {"Error: connect your address to ethereum goerli test network"}
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

          <Card sx={{ maxWidth: 450, margin: '0 auto', padding: '20px,5px' }}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField

                    type="text"

                    placeholder='Enter token uri'

                    onChange={addbsEvent}
                    value={tokenuri}
                    fullWidth required
                  />
                  <Box sx={{ marginTop: '20px', marginLeft: '130px' }}>

                    <Button onClick={nftmint} type="submit" variant='contained' color='primary'>mintnft</Button>
                  </Box>

                </Grid>
              </Grid>
            </CardContent>

          </Card>
        </Container>

      )}






    </>






  );
};
