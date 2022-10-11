import { Typography, Container, Button, Paper, Box, Stack } from '@mui/material'
import CardResult from '../components/Home/CardResult';
import FormPrueba from '../components/Home/FormPrueba';
import ModalPrueba from '../components/Home/ModalPrueba';
import TableExample from '../components/Home/TableExample';

const Home = () => {
  return (<>
    <Container>
      <Typography variant="h4">Home</Typography>
      <Stack spacing={12}>
        <FormPrueba />
        <CardResult />
        <Container style={{marginTop:"1rem"}}>
          <TableExample />
        </Container>
      </Stack>
    </Container>
  </>)
};

export default Home