import { Box, Grid, Typography, List, ListItemText, TextField, Stack, Button } from '@mui/material'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/Send'
  
export const Title = styled(Typography)(() => ({
    marginBottom: `1em`
}))

export const Subscribirse = styled(TextField)(() => ({
    '.MuiInput-root::after':{
        borderBottom: `1px solid #ff7700`
    },

    '.MuiInput-root::before':{
        borderBottom: `1px solid #ff7700`
    }
}))




export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor:"#251F1F",
                mt: 5,
                pt: 8,
                pb: 8,
            }}
        >
            <Grid container  
                justifyContent="space-evenly">
                <Grid item md={6} lg={2}>
                    <Title sx={{color: '#FF7700'}} gutterBottom>About us</Title>
                    <Typography variant="caption2" sx={{color:'#FFFFFF', fontSize:13, fontStyle: 'italic' }}>Lorem ipsum dolor sit amet consectetur, adipiscing elit placerat conubia facilisis viverra, cubilia integer inceptos etiam. <br /><br />
                    (011) - 12121212 // cinema@numen.com
                    </Typography>
                    <Box sx={{mt:4}}>
                        <FacebookIcon sx={{ fontSize: 30, color: '#FF7700', mr: 2 }} />
                        <InstagramIcon sx={{ fontSize: 30, color: '#FF7700', mr: 2 }}/>
                        <TwitterIcon sx={{ fontSize: 30, color: '#FF7700' , mr: 2}}/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={1}>
                <Title sx={{color: '#FF7700'}}>Information</Title>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2" sx={{color:'#FFFFFF', fontSize:13, fontStyle: 'italic'}}>
                                    Sucursales
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2" sx={{color:'#FFFFFF', fontSize:13, fontStyle: 'italic'}}>
                                    Cartelera
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2" sx={{color:'#FFFFFF', fontSize:13, fontStyle: 'italic'}}>
                                    Privary & Policy   
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2" sx={{color:'#FFFFFF', fontSize:13, fontStyle: 'italic'}}>
                                    Terms & Conditions
                                </Typography>
                            </ListItemText>
                        </List>                 
                </Grid>
                
                <Grid item md={6} lg={2}>
                    <Title sx={{color: '#FF7700'}}>Novedades</Title>
                    <Stack>
                        <Subscribirse
                            label='Ingresar Email' 
                            variant='standard' />
                                <Button 
                                    startIcon={<SendIcon sx={{ color: '#ff7700' }} />}
                                    sx={{ mt: 4, mb: 4, bgcolor:'#EED6C7'}}
                                    variant="contained">
                                    <Typography variant="overline" sx={{color: '#ff7700', fontWeight: 800}}>subscribite</Typography>
                                </Button>
                    </Stack>
                
                </Grid> 
            </Grid>
        </Box>
    )
}
