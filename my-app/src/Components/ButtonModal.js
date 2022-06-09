import { Button,Modal,Box,useTheme, TextField} from "@mui/material";
import { useState } from "react";
import SelectModal from "./SelectModal";
import SelectModal2 from "./SelectModal2";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "900px",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };


export default function ButtonModal(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    const options=["Cinépolis Avellaneda","Cinépolis Merlo","Cinépolis Recoleta","Cinépolis Pilar","Cinépolis Lujan"];
    const horarios=["10:00","11:00","12:00","14:00","15:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"];

    return (

          <div>
            <Button onClick={handleOpen} color="secondary">Comprar Entradas</Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                <SelectModal option={options} title="Seleccione Cine"/>
                <SelectModal2/>
                <SelectModal option={horarios} title="Seleccione Horario" tamaño={{width:"50%"}}/>
                {/* <TextField inputProps={{ inputMode: 'numeric', pattern: '[0 - 9]*' }} fullWidth label="Ingrese la Cantidad de Entradas" /> */}
                </Box> 
            </Modal>

          </div>
    )
}