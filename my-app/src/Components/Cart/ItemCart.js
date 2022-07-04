import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import Entradas from './Entradas'
import SelectModal from './SelectModal';
import SelectModal2 from './SelectModal2';

const style = {
    margin: "0",
    padding: "0",
    width: "100%",
    borderRadius: "10px",
    img: { width: "60%", alignItem: "center", height: "auto" }
};

const cines = ["Cinépolis Avellaneda", "Cinépolis Merlo", "Cinépolis Recoleta", "Cinépolis Pilar", "Cinépolis Lujan"];
const horarios = ["10:00", "11:00", "12:00", "14:00", "15:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export default function ItemCart({ product: { title, category, price, img } }) {
    return (
        <Grid item xs={12}>
            <Paper elevation={3}>
                <Grid container spacing={3} sx={style}>
                    <Grid item xs={12} sm={4}>
                        <img src={img} alt="Imagen-Pelicula" sx={style.img} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h4" color="text.secondary" sx={{ margin: "10px" }}>{title}</Typography>
                        <Entradas price={price} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <SelectModal option={cines} title="Seleccione Cine" />
                        <SelectModal2 />
                        <SelectModal option={horarios} title="Seleccione Horario" />
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}
