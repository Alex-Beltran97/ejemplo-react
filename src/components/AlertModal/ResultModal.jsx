import { Button, IconButton, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const ResultModal = ({ typeAlert,open, handleOpen, msg }) => {
  const [typeIcon, setTypeIcon] = useState(typeAlert);

  const IconRendered = () =>{
    switch(typeIcon){
      case "success":
        return (<>
          <Typography
            textAlign="center"
            color="primary"
          >
            <IoCheckmarkCircleOutline style={{ fontSize:"8rem" }} />
          </Typography>
        </>
        )
      break;
      case "error":
        return (<>
          <Typography
            textAlign="center"
            color="primary"
          >
            <IoCloseCircleOutline style={{ fontSize:"8rem" }} />
          </Typography>
        </>
        )
      break;

    }
  }

  useEffect(() => {
    setTypeIcon(typeAlert);
  }, [typeAlert]);

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
          <IconRendered />
        </Typography>
        { typeAlert==="error"?
          <Typography textAlign="center" variant="h5">Opps! Could not { msg }</Typography>
          :
          <Typography textAlign="center" variant="h5">Successfully { msg }</Typography>
         }
        <Typography textAlign="end">
          <Button variant="contained" onClick={ handleOpen }>Ok</Button>
        </Typography>
      </Paper>

    </Modal>
  </>)
};

const style = {
  position:"absolute",
  width:"36%",
  top:"24%",
  left:"32%",
  padding:"1.5rem"
}

export default ResultModal;