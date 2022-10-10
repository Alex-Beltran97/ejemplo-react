// import { FormControl, Input, InputLabel,FormHelperText, Button } from "@mui/material";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// const pwdRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

// const validationSchema = Yup.object().shape({
//   email:Yup.string().required("Debe llenar este campo obligatoriamente").email("El correo no es valido").trim(),
//   pwd:Yup.string().matches(pwdRegex,"La contraseña no es valida").required("El campo es obligatorio").trim()
// })

// const Form2 = () => {
//   return (<>
//     <Formik
//       initialValues={{
//         email:"",
//         pwd:""
//       }}

//       validationSchema={ validationSchema }

//       onSubmit={(values)=>{
//         console.log(values)
//       }}
//     >
//       { ({ handleChange, values, handleBlur, errors, touched })=>(
//         <Form>
//           <FormControl>
//             <InputLabel htmlFor="pwd">Password: </InputLabel>
//             <Input
//               id="pwd"
//               name="pwd"
//               aria-labelledby="pwd-helper" 
//               onChange={ handleChange }
//               value={ values.pwd }
//               onBlur={ handleBlur }
//               error={ errors.pwd&&touched.pwd?true:false }
//             />
//             {errors.pwd&&touched.pwd?
//               <FormHelperText id="pwd-helper">{ errors.pwd }</FormHelperText>
//               :
//               <FormHelperText id="pwd-helper">Introdusca su contraseña</FormHelperText>
//             }
//           </FormControl>
//           <FormControl>
//             <InputLabel htmlFor="pwd">Password: </InputLabel>
//             <Input
//               id="pwd"
//               name="pwd"
//               aria-labelledby="pwd-helper" 
//               onChange={ handleChange }
//               value={ values.pwd }
//               onBlur={ handleBlur }
//               error={ errors.pwd&&touched.pwd?true:false }
//             />
//             {errors.pwd&&touched.pwd?
//               <FormHelperText id="pwd-helper">{ errors.pwd }</FormHelperText>
//               :
//               <FormHelperText id="pwd-helper">Introdusca su contraseña</FormHelperText>
//             }
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary">Login</Button>
//         </Form>
//       ) }
//     </Formik>
//   </>)
// };

// export default Form2