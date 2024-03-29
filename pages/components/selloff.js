import { useState } from 'react'
import { ethers } from 'ethers';
import realestateabi from './tokenizeRealestate.json'
import { TextField, Card, CardContent, Grid, Button, Box } from '@mui/material';
import Container from '@mui/material/Container';

export default function SellOf() {
  const [hasError, setError] = useState(false);
  const [signer, setSigner] = useState();
  const [sellof, setsellof] = useState({
    // nftaddr:"",
    assetid: "",
    // assetcontact:"",
    fassetid: "",
    // fassetsize:"",
    // fassetprice:"",
    // fassetrentcost:"",
  });

  function addbsEvent(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;

    setsellof((prevalue) => {
      console.log(prevalue);

      return {
        ...prevalue,
        [name]: value,

      };

    })
  }

  async function sellOf(e) {
    e.preventDefault();
    try {
      const contractAddress = "0x27af769172979f8e2fcfb35dd57f9b5593b0d815";
      const cabi = realestateabi.abi;
      const contract = new ethers.Contract(contractAddress, cabi, signer);
      // const _location = addasset.assetlocation;
      // const _contact = addasset.assetcontact;
      // const _fassetsize = addfasset.fassetsize;
      // const _fassetprice = addfasset.fassetprice;
      // const _fassetrentcost = addfasset.fassetrentcost;
      const _fassetid = sellof.fassetid;
      const _assetid = sellof.assetid;
      // const locationbytes = ethers.utils.formatBytes32String(_location) ;
      // const contactbytes = ethers.utils.formatBytes32String(_contact) ;
      // const fassetsizebytes = ethers.utils.formatBytes32String(_fassetsize) ;
      const caddbs = await contract.selloff(_assetid, _fassetid).then((r) => {
        console.log(r);
      });
    } catch (e) {
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
          {"Error: connect your address to ethereum goerli test network/sender is not owner/sell already off"}
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


          <form onSubmit={sellOf}>
            <Card sx={{ maxWidth: 450, margin: '0 auto', padding: '20px,5px' }}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item>
                    <TextField
                      type="number"
                      placeholder='Enter assetid'
                      name='assetid'
                      onChange={addbsEvent}
                      value={sellof.assetid}
                      fullWidth required
                    />
                    <TextField
                      type="number"
                      placeholder='Enter fraction assetid'
                      name='fassetid'
                      onChange={addbsEvent}
                      value={sellof.fassetid}
                      fullWidth required
                    />
                    <Box sx={{ marginTop: '20px', marginLeft: '130px' }}>

                      <Button type="submit" variant='contained' color='primary'>sellOf</Button>
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