import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon,Typography,IconButton } from '@mui/material/';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    return (
        <>
        <Drawer  anchor='left' onClose={() =>setOpenDrawer(false) } open={openDrawer}>
            <List>
            <ListItem divider button>
                    <ListItemIcon><MovieIcon sx={{color:'#ff7700', fontSize: 35}}/>
                <Typography variant="buttom" display="block" gutterBottom center sx={{marginLeft: 1, color: '#FFFFFF', fontSize:20,}}>Cinema </Typography>
                <Typography variant="buttom" display="block" gutterBottom sx={{marginLeft: 1, marginRight: 5, color: '#FF7700', fontSize:20}}>Numen </Typography></ListItemIcon>
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

                <ListItem button>
                    <ListItemIcon><ListItemText>Compra tu entrada</ListItemText>
                    <IconButton aria-label="buy" color='secondary' href='#'>
                                            <ShoppingCartOutlinedIcon sx={{ fontSize: 20,color: '#FF7700' }}/>
                                        </IconButton></ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)} sx={{ ml: 'auto'}} >
                <MenuIcon />
            </IconButton>
        </>
    )}

export default DrawerComponent;