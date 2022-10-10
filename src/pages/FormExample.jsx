import { Container, Typography } from "@mui/material";
import Form from "../components/FormExample/Form";
// import Form2 from "../components/FormExample/Form2";

const FormExample = () => {
  return (<>
  <Container>
    <Typography variant="h5">Formulario Ejemplo</Typography>
    <Form />
    {/* <Form2 /> */}
  </Container>
  </>)
};

export default FormExample;