import { Button, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { modalStyle } from "../../styles/theme";
import FormPrueba from "./FormPrueba";

const ModalPrueba = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);

  return (<>
    <Button variant="contained" onClick={ handleOpen }>Options</Button>
    <Modal
      open={ open }
      onClose={ handleClose }
    >
      <Paper style={{ ...modalStyle } }>
        <Typography variant="subtitle1">Modal de prueba</Typography>
        <FormPrueba />
      </Paper>
    </Modal>
  </>)
};

export default ModalPrueba