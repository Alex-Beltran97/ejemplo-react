import { Box, Button, Grid, InputLabel, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";

const FormPrueba = ({ openAlert }) => {

  return (<>
    <Formik
      initialValues={{
        date:"2022-10-12",
        name:"Jose",
        products:"Queso",
        price:"1000"
      }}

      onSubmit={(values)=>{
        openAlert();
        console.log(values);
      }}
    >
      {()=>(
        <Form>
          <Grid container>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={4}>
                  <InputLabel htmlFor="date">Date: </InputLabel>
                  <Field type="date" name="date" />
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="name">Date: </InputLabel>
                  <Field as="select" name="name">
                    <option value="">Choose one</option>
                    <option value="carlitos">Carlitos</option>
                    <option value="pablito">Pablito</option>
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="products">Products: </InputLabel>
                  <Field as="select" name="products">
                    <option value="">Choose one</option>
                    <option value="jarabe">Jarabe</option>
                    <option value="manaza">Manaza</option>
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
                <Grid item xs={4}>
                  <InputLabel htmlFor="price">Price: </InputLabel>
                  <Field type="number" name="price" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} alignSelf="center"  justifySelf="center">
              <Button type="submit" variant="contained">Send</Button>
            </Grid>
          </Grid>
        </Form>
      )}      
    </Formik>
  </>)
};

export default FormPrueba;