import {  Modal,Container, IconButton, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



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

export default function Carrito() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
  return (
    <div>
      <IconButton onClick={handleOpen} color="secondary"><ShoppingCartOutlinedIcon/></IconButton>
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Container maxWidth="lg" sx={style}>
            <Grid container spacing={3}>
              
            </Grid>
        </Container>
      </Modal>  
    </div>
  )
}
