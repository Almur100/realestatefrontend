import { useState } from 'react'
import { ethers } from 'ethers';
import realestateabi from './abi'
import NFTabi from './nftabi'
import { TextField, Card, CardContent, Grid, Button, Box } from '@mui/material';
import Container from '@mui/material/Container';

export default function AddbuyerSeller(marketplace) {
  // const[signer,setSigner] = useState();
  const [hasError, setError] = useState(false);
  const [signer, setSigner] = useState();
  const [addbuyerseller, setaddbuyerseller] = useState({
    location: "",
    contact: "",
  });



  function addbsEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setaddbuyerseller((prevalue) => {
      console.log(prevalue);

      return {
        ...prevalue,
        [name]: value,

      };

    })
  }

  function nftEvent(e) {
    // e.persist();
    console.log(e.target.value);

    // console.log(e.currentTarget.checked);
    settokenuri(e.target.value);

  }

  async function AddbuyerSeller(e) {
    e.preventDefault();
    // const contractAddress = "0x6ef8c7f41f2adad277fe204703c0a77c1cb58ce8";
    const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    const abi = realestateabi;
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const _location = addbuyerseller.location;
    const _contact = addbuyerseller.contact;
    const locationbytes = ethers.utils.formatBytes32String(_location);
    const contactbytes = ethers.utils.formatBytes32String(_contact);
    try{
    const caddbs = await contract.addbuyerseller(locationbytes, contactbytes).then((r) => {
      console.log(r);
    });
  }catch(e){
  console.log(e) 
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
          <Button type="submit" onClick={connect}> connect wallet </Button>
          </Box>
        </>
      ) : (
        <Container>
      <Box sx={{ marginLeft: '550px', marginTop: '10px', marginBottom: '10px' }}>
        <Button type="submit" variant='contained' color='primary' onClick={connect}> connect wallet </Button>
      </Box>

      <form onSubmit={AddbuyerSeller}>
        <Card sx={{ maxWidth: 450, margin: '0 auto', padding: '20px,5px' }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
                <TextField
                  type="text"
                  placeholder='Enter your location'
                  name='location'
                  onChange={addbsEvent}
                  value={addbuyerseller.location}
                  fullWidth required
                />

                <TextField
                  type="text"

                  placeholder='Enter your contact'
                  name='contact'
                  onChange={addbsEvent}
                  value={addbuyerseller.contact}
                  fullWidth required
                />

                <Box sx={{ marginTop: '20px', marginLeft: '130px' }}>

                  <Button type="submit" variant='contained' color='primary'>addbuyerSeller</Button>
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