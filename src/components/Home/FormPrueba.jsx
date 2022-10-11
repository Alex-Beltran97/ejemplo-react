import { Box, Button, Grid, InputLabel, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";

const FormPrueba = () => {
  return (<>
    <Formik
      initialValues={{
        date:"",
        name:"",
        products:"",
        price:""
      }}

      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      {()=>(
        <Form>
          <Grid container>
            <Grid xs={10}>
              <Grid container>
                <Grid xs={4}>
                  <InputLabel htmlFor="date">Date: </InputLabel>
                  <Field type="date" name="date" />
                </Grid>
                <Grid xs={4}>
                  <InputLabel htmlFor="name">Date: </InputLabel>
                  <Field as="select" name="name">
                    <option value="">Choose one</option>
                    <option value="carlitos">Carlitos</option>
                    <option value="pablito">Pablito</option>
                  </Field>
                </Grid>
                <Grid xs={4}>
                  <InputLabel htmlFor="products">Products: </InputLabel>
                  <Field as="select" name="products">
                    <option value="">Choose one</option>
                    <option value="jarabe">Jarabe</option>
                    <option value="manaza">Manaza</option>
                  </Field>
                </Grid>
                <Grid xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
                <Grid xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
                <Grid xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={2} alignSelf="center"  justifySelf="center">
              <Button type="submit" variant="contained">Send</Button>
            </Grid>
          </Grid>
        </Form>
      )}      
    </Formik>
  </>)
};

export default FormPrueba;