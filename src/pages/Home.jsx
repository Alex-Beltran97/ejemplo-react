import { Typography, Container, Button, Paper, Box, Stack } from '@mui/material'
import { useState } from 'react';
import AlertModal from '../components/AlertModal/AlertModal';
import CardResult from '../components/Home/CardResult';
import FormPrueba from '../components/Home/FormPrueba';
import ModalPrueba from '../components/Home/ModalPrueba';
import TableExample from '../components/Home/TableExample';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(e=>!e);

  return (<>
    <Container>
      <Typography variant="h4">Home</Typography>
      <Stack spacing={12}>
        <FormPrueba 
          openAlert={ handleOpen }
        />
        <CardResult />
        <Container style={{marginTop:"1rem"}}>
          <TableExample />
        </Container>
      </Stack>
      <AlertModal 
        open={ open }
        handleOpen={ handleOpen }
      />
      
    </Container>
  </>)
};

export default Home