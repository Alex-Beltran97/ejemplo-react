import { ListItemText, MenuItem, MenuList, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  {label:"Home", path:"home"},
  {label:"Pagina 1", path:"pagina1"},
  {label:"Pagina 2", path:"pagina2"},
  {label:"Providers", path:"providers"},
  {label:"Formulario", path:"formulario"},
];

const LinkPages = () => {
  const [position, setPosition] = useState("Home");

  const navigation = useNavigate();

  const handlePages = (label, page)=>{
    setPosition(label);
    navigation(`/${page}`);
  };

  return (<>
    <MenuList>
      <Stack direction="row">
        { pages.map(({ label, path },index)=>(
          <MenuItem key={ index } onClick={()=>handlePages(label,path)}>
            <Typography color={position===label?"primary":null}>{ label }</Typography>
          </MenuItem>
        )) }
      </Stack>
    </MenuList>
  </>)
};

export default LinkPages;