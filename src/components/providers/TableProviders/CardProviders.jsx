import { Table, TableContainer,TableHead,TableBody,TableRow, TableCell, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProviders } from "../../../actions/providers.action";
import CardProvider from "./CardProvider";

const CardProviders = () => {
  const [providers, setProviders] = useState([]);

  const getProvidersData = async ()=>{
    try{
      const { data } = await getProviders();
      setProviders(data);
    }catch(error){
      console.log(error);
    };
  };

  useEffect(() => {
    getProvidersData();
  }, [providers]);

  return (<>
    <center>
      <TableContainer>
        <Table style={{width:"70%"}}>
          <TableHead style={{backgroundColor:"white"}}>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" fontWeight={700}>ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight={700}>Provider</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight={700}>Nit</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight={700}>Address</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight={700}>Phone Number</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor:"white"}}> 
            { providers.map(item=>(
              <CardProvider 
                key={ item.id } 
                id={ item.id }
                name={ item.name }
                nit={ item.nit }
                address={ item.address }
                phone={ item.phone }
              />
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  </>)
};

export default CardProviders;