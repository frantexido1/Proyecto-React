import { Modal, Container, Typography, Grid, IconButton, Button } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCartValue } from '../../Context/CartProvider';
import ItemCart from './ItemCart';
import { actionTypes } from "../../Hooks/CartReducer";

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
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useCartValue();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    dispatch({
      type:actionTypes.REMOVE_ALL
    })
    setOpen(false)
  }

  return (
    <div>
      <IconButton onClick={handleOpen} color="secondary"><ShoppingCartOutlinedIcon /></IconButton>
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Container maxWidth="lg" sx={style}>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align='center' gutterBottom variant="h4" color="text.secondary">
                Shopping Cart
              </Typography>
            </Grid>

            {basket?.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Finalizar Compra
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </div>
  )
}
