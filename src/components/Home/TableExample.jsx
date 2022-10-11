import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Stack } from "@mui/system";

const animals = [
  {id:1,name:"Perro",color:"Negro"},
  {id:2,name:"Gato",color:"Amarillo"},
  {id:3,name:"Conejo",color:"Balnco"}
];

const TableExample = () => {
  return (<>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor:"white",borderRadius:"1rem" }}>
            <TableCell>#ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { animals.map(item=>(
            <TableRow key={item.id} style={{ backgroundColor:"white",borderRadius:"1rem" }}>
              <TableCell>{ item.id }</TableCell>
              <TableCell>{ item.name }</TableCell>
              <TableCell>{ item.color }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TableExample