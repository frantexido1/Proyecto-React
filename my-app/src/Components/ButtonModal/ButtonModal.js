import { Button,Modal,useTheme,Container} from "@mui/material";
import { useContext, useState } from "react";
import Entradas from "./Entradas";
import SelectModal from "./SelectModal";
import SelectModal2 from "./SelectModal2";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };


export default function ButtonModal(){

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () =>{setOpen(false)} ;


    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();

    const options=["Cinépolis Avellaneda","Cinépolis Merlo","Cinépolis Recoleta","Cinépolis Pilar","Cinépolis Lujan"];
    const horarios=["10:00","11:00","12:00","14:00","15:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"];
   

    return (
      <div>
          <Button onClick={handleOpen} color="secondary"><ShoppingBagIcon/></Button>
            <Modal
              open={open}
              onClose={handleClose}
            >
               <Container maxWidth="lg" sx={style}>

                  <SelectModal option={options} title="Seleccione Cine"/>                  
                  <SelectModal2/>
                  <SelectModal option={horarios} title="Seleccione Horario" tamaño={{width:"50%"}}/>                  
                  <Entradas/>
                  <Button  color="secondary" onClick={handleClose}>Aceptar</Button>

                </Container>

            </Modal>
      </div>

    )
}