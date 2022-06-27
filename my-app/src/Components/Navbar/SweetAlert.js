import { Typography, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import swal from "sweetalert";




export default function SweetAlert() {

  const [visible, setVisible] = useState(true);
  const alertaModal = () => {
    swal({
      title: "PROMO 2X1",
      text: ' TODOS LOS MIERCOLES 2X1 EN NUESTRAS SALAS 4D ' ,
      icon: "success",
      button: "Aceptar"
    });
  };

  return (
      <>
      { visible && 
        (<Box 
            sx={{
            height: 25,
            backgroundColor:'#EED6C7',
            position: 'sticky',
            top: 0
          }}>
          <Typography variant="body1" sx={{textAlign: 'center', color: '#000000',fontWeight: 500}}>
            🔥HOTSALE🔥2X1 Todos los Miercoles de Junio en nuestras salas 4D 
            <IconButton 
              onClick={() => {
              setVisible(false);
              alertaModal();
              }}>
                <CloseIcon sx={{fontSize: 13  , color: '#000'}} />
            </IconButton>
          </Typography>
        </Box>)
      }
      </>
    )
  }

