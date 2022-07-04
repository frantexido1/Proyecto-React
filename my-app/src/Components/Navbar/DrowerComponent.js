import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, IconButton } from '@mui/material/';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import MenuIcon from '@mui/icons-material/Menu';
import Carrito from '../Cart/carrito';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <IconButton>
                <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
            </IconButton>
            <MovieIcon sx={{ color: '#ff7700', fontSize: 50 }} />
            <Typography variant="overline" display="block" gutterBottom center sx={{ marginLeft: 1, color: '#FFFFFF', fontSize: 20, fontFamily: 300 }}>Cinema </Typography>
            <Typography variant="button" display="block" gutterBottom sx={{ marginLeft: 1, marginRight: 5, color: '#FF7700', fontSize: 20 }}>Numen </Typography>
            <Drawer anchor='left' onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <List>
                    <ListItem divider button>
                        <ListItemIcon><MovieIcon sx={{ color: '#ff7700', fontSize: 35 }} />
                            <Typography variant="buttom" display="block" gutterBottom center sx={{ marginLeft: 1, color: '#FFFFFF', fontSize: 20, }}>Cinema </Typography>
                            <Typography variant="buttom" display="block" gutterBottom sx={{ marginLeft: 1, marginRight: 5, color: '#FF7700', fontSize: 20 }}>Numen </Typography></ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon><ListItemText>Inicio</ListItemText></ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon><ListItemText>Cartelera</ListItemText></ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon><ListItemText>Salas</ListItemText></ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon><ListItemText>Sucursales</ListItemText></ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon><ListItemText>Contacto</ListItemText></ListItemIcon>
                    </ListItem>

                </List>
            </Drawer>
            <IconButton sx={{ ml: 'auto' }} >
                <Carrito/>
            </IconButton>
        </>
    )
}

export default DrawerComponent;