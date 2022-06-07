import { Button,Modal,Box} from "@mui/material";
import { useState } from "react";
import SelectModal from "./SelectModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };


export default function ButtonModal(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    



    return (

          <div>
            <Button onClick={handleOpen} color="secondary">Open modal</Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                <SelectModal/>

                </Box> 
            </Modal>

          </div>
    )
}