import { Modal, Typography, Grid, IconButton, Button, Badge, Box } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCartValue } from '../../Context/CartProvider';
import ItemCart from './ItemCart';
import { actionTypes } from "../../Hooks/CartReducer";
import { Container } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  overflow: 'scroll',
  height: '100%',
  display: 'block',
  bgcolor: "background.paper",
  borderRadius: '10px',
  boxShadow: 24,
}

export default function Carrito() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useCartValue();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const removeAll = () => dispatch({
    type: actionTypes.REMOVE_ALL
  })

  const handleClose = () =>setOpen(false);
  return (
    <div>
      <Badge badgeContent={basket.length} color="secondary">
        <IconButton onClick={handleOpen} color="secondary"><ShoppingCartOutlinedIcon /></IconButton>
      </Badge>

      <Modal
        open={open}
        onClose={handleClose}
        sx={style}
      >
        <Container maxWidth="lg" >
          <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography align='center' gutterBottom variant="h4" color="text.secondary">
                Shopping Cart
              </Typography>
            </Grid>

            {basket?.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" onClick={removeAll}>
                Finalizar Compra
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </div>
  )
}
