import { TableCell, TableRow, Typography } from "@mui/material"

const CardProvider = ({ id, name, nit, address, phone }) => {
  return (<>
    <TableRow>
      <TableCell>
        <Typography variant="subtitle1">{ id }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ name }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ nit }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ address }</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{ phone }</Typography>
      </TableCell>
    </TableRow>
  </>)
}

export default CardProvider