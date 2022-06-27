import React, { useState }from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs,  ListItemButton, useMediaQuery, useTheme, Grid } from '@mui/material/';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton'
import MovieIcon from '@mui/icons-material/Movie';
import DrawerComponent from './DrowerComponent';
import Cart from './Cart/Cart';


export const Navbar = () => {

    const [ value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => {setValue(newValue);};
    //responsive
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <AppBar color= 'primary' position='fixed'>
                <Toolbar>
                <MovieIcon sx={{color:'#ff7700', fontSize: 50}}/>
                <Typography variant="overline" display="block" gutterBottom center sx={{marginLeft: 1, color: '#FFFFFF', fontSize:20, fontFamily:300}}>Cinema </Typography>
                <Typography variant="button" display="block" gutterBottom sx={{marginLeft: 1, marginRight: 5, color: '#FF7700', fontSize:20}}>Numen </Typography>
                        { isMatch ? <DrawerComponent /> : (
                            <>
                            <Grid  container>
                                    <Tabs onChange={handleClickTab} textColor='secondary' indicatorColor='secondary' value={value}>
                                        <Tab label='Inicio' />
                                        <Tab label='Cartelera' />
                                        <Tab label='Salas' />
                                        <Tab label='Sucursales' />
                                        <Tab label='Contacto' />
                                    </Tabs>
                                </Grid>
                                    <ListItemButton>
                                        <IconButton aria-label="search" color='secondary'>
                                            <SearchOutlinedIcon sx={{ fontSize: 25, color: '#FF7700' }}/>
                                        </IconButton>
                                    </ListItemButton>


                                    <ListItemButton>

                                        <Cart/>

                                    </ListItemButton>
                            </>
                            )}               
                </Toolbar>
            </AppBar>
        </>
    )
}
