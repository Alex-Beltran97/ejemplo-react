import { Button, Modal, Paper, Stack, Typography, InputLabel } from "@mui/material"
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { postProviders } from "../../actions/providers.action";

const ModalNewProvider = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(e=>!e);

  const sendProviders = async (data)=>{
    try{
      const result = await postProviders(data);
      console.log(result);
    }catch(error){
      console.log(error);
    };
  };

  return (<>
    <Button variant="contained" onClick={ handleOpen }>Add Provider</Button>
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={ style }>
        <Typography variant="h6" textAlign="center">New Provider</Typography>
        <Formik
          initialValues={{
            name: "",
            nit: "",
            address: "",
            indicative: "",
            phone: "",
          }}

          onSubmit={(values)=>{
            const dataToSend = {
              "name":values.name,
              "nit":values.nit,
              "address":values.address,
              "phone":`+${values.indicative} ${values.phone}`
            };

            sendProviders(dataToSend);
          }}
        >
          {()=>(
            <Form>
              <Stack spacing={ 1 }>
                <InputLabel htmlFor="name">Name:</InputLabel>
                <Field name="name" type="text" />
                <InputLabel htmlFor="nit">Nit:</InputLabel>
                <Field name="nit" type="text" />
                <InputLabel htmlFor="address">Address:</InputLabel>
                <Field name="address" type="text" />
                <InputLabel htmlFor="indicative">Indicative:</InputLabel>
                <Field name="indicative" type="number" />
                <InputLabel htmlFor="phone">Phone:</InputLabel>
                <Field name="phone" type="number" />
                <Button variant="contained" type="submit">New Provider</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  </>)
};

const style = {
  width:"70%",
  position:"absolute",
  top:"20%",
  left:"20%",
  padding:"1rem"
};

export default ModalNewProvider