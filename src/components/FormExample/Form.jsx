import { Formik, Form } from "formik";
import { Button, Stack } from "@mui/material";
import * as Yup from "yup";
import Fields from "./Fields";

const pwdRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const validationSchema = Yup.object().shape({
  email:Yup.string()
    .required("El campo Email no puede ir vacio")
    .email("Este Email no es valido")
    .trim(),
  password:Yup.string()
    .matches(pwdRegex,"Contraseña invalida")
    .required("El campo Password no puede ir vacio")
    .trim(),
});

export default () => {
  return (<>
    <Formik
      initialValues={{
        email:"",
        password:""
      }}

      validationSchema={ validationSchema }

      onSubmit={ (values)=>{
        console.log(values);
      } }
    >
      { ({ handleChange, values, errors, touched, handleBlur })=>(
        <Form>
          <Stack spacing={ 2 }>
            <Fields 
              label="Email:"
              ariaDescribedby="email-helper"
              description=" Ingrese su correo aqui "
              name="email"
              values={  values.email }
              errors={ errors.email }
              touched={ touched.email }
              handlers={{
                handleChange,
                handleBlur
              }}
            />
            <Fields 
              label="Password:"
              ariaDescribedby="pwd-helper"
              description="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
              NO puede tener otros símbolos."
              name="password"
              values={ values.password }
              errors={ errors.password }
              touched={ touched.password }
              handlers={{
                handleChange,
                handleBlur
              }}
            />      
            <Button variant="contained" type="submit" color="secondary">Send</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>)
};
