import { Button, Modal, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IoAlertCircleOutline } from "react-icons/io5";
import ResultModal from './ResultModal';

const AlertModal = ({ open, handleOpen }) => {
  const [result, setResult] = useState(false);

  const handleOpenResult = ()=>{
    setResult(e=>!e)
  };

  return (<>
    <Modal
      open={ open }
      onClose={ handleOpen }
    >
      <Paper style={ style }>
        <Typography
          textAlign="center"
          color="primary"
        >
          <IoAlertCircleOutline style={{ fontSize:"8rem" }} />
        </Typography>
        <Stack spacing={ 1 }>
          <Typography textAlign="center" variant="h4">Are you sure?</Typography>
          <Typography textAlign="center" variant="h6">You would eliminate the product "Jalea de manzana"?</Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Button variant="contained" onClick={ handleOpen }>No, Cancel</Button>
            <Button variant="contained" onClick={ ()=>{
              handleOpenResult();
              handleOpen();
              } }>Yes, delete it!</Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
    <ResultModal
      typeAlert="success"
      msg="Deleted"
      open={ result }
      handleOpen={ handleOpenResult }
    />
  </>
  )
};

const style = {
  position:"absolute",
  width:"36%",
  top:"24%",
  left:"32%",
  padding:"1.5rem"
};

export default AlertModal;