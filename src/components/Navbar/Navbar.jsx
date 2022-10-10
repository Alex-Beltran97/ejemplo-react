import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IoReorderThreeSharp } from "react-icons/io5";
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import "./index.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IoReorderThreeSharp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={ 4 }>
            <Link className="link" style={{ textDecoration:"none" }} to="/home">Home</Link>
            <Link className="link" style={{ textDecoration:"none" }} to="/pagina1">Pagina1</Link>
            <Link className="link" style={{ textDecoration:"none" }} to="/pagina2">Pagina2</Link>
            <Link className="link" style={{ textDecoration:"none" }} to="/pagina3">Pagina2</Link>
            <Link className="link" style={{ textDecoration:"none" }} to="/formulario">Formulario</Link>
          </Stack>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


