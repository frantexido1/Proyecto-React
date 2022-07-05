import React, { useState }from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs,  ListItemButton, useMediaQuery, useTheme, Grid } from '@mui/material/';
import MovieIcon from '@mui/icons-material/Movie';
import DrawerComponent from './DrowerComponent';
import Carrito from '../Cart/carrito';



export const Navbar = () => {

    const [value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => { setValue(newValue); };
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <AppBar color='primary' position='sticky'>
                <Toolbar>
                <MovieIcon sx={{color:'#ff7700', fontSize: 50}}/>
                <Typography variant="overline" display="block" gutterBottom center sx={{marginLeft: 1, color: '#FFFFFF', fontSize:20, fontFamily:300}}>Cinema </Typography>
                <Typography variant="button" display="block" gutterBottom sx={{marginLeft: 1, marginRight: 5, color: '#FF7700', fontSize:20}}>Numen </Typography>
                        { isMatch ? <DrawerComponent /> : (
                            <>
                            <Grid  container>
                                    <Tabs onChange={handleClickTab} textColor='secondary' indicatorColor='secondary' value={value}>
                                        <Tab label='Inicio' href="#Inicio" />
                                        <Tab label='Cartelera' href="#Cartelera"/>
                                        <Tab label='Salas' href="#Salas"/>
                                        <Tab label='Sucursales' href="#Sucursales"/>
                                        <Tab label='Contacto' href="#Contacto"/>
                                    </Tabs>
                                </Grid>

                            <ListItemButton>
                                <Carrito />
                            </ListItemButton>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}
