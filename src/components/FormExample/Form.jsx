import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Stack, Typography } from "@mui/material";
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
  cities:Yup.string()
    .required("Por favor seleccione una opcion"),
});

export default () => {
  return (<>
    <Formik
      initialValues={{
        email:"",
        cities:"",
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
            <select 
              name="cities"
              id="cities"
              onChange={ handleChange } 
              onBlur={ handleBlur }
            >
              <option value="">Choose one</option>
              <option value="Paris">Paris</option>
              <option value="Madrid">Madrid</option>
              <option value="Nueva York">Nueva York</option>
            </select>
            <ErrorMessage name="cities" render={(msg)=>(<ErrorMsg msg={ msg }/>)} />
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

const ErrorMsg = ({msg})=>(
  <Typography variant="subtitle1" color="green">{ msg }</Typography>
)
