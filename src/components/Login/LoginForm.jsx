import { Button, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  return (<>
    <Formik
      initialValues={{
        email:"",
        password:"",
      }}

      onSubmit={(values)=>{
        localStorage.setItem("user",JSON.stringify(values));
      }}
    >
      { ()=>(
        <Form>
          <Stack spacing={ 4 }>
            <label htmlFor="email">Email</label>
            <Field 
              type="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <Field 
              type="password"
              name="password"
            />
            <Button type="submit" variant="contained" color="secondary">Login</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>)
};

export default LoginForm;