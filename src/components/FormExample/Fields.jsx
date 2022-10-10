import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

const Fields = ({ label, name, type, ariaDescribedby, handlers, values, errors, touched, description }) => {
  return (<>
    <FormControl>
      <InputLabel htmlFor={ name }>{ label }</InputLabel>
      <Input
        id={ name }
        name={ name }
        type={ type }
        aria-describedby={ ariaDescribedby }
        value={ values }
        onChange={ handlers.handleChange }
        onBlur={ handlers.handleBlur }        
        error={ errors && touched ?true:false }
      />
      { errors && touched ?
        (<FormHelperText id={ ariaDescribedby }>{ errors }</FormHelperText>)
        :
        <FormHelperText id={ ariaDescribedby }>{ description }</FormHelperText>
      }
    </FormControl>
  </>)
};

export default Fields;
