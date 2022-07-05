import { ButtonGroup, Button, Typography, Grid } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"



export default function Entradas(price) {
    const [valor, setValor] = useState(1)

    return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center" alignContent="center">
            <Grid item xs={12}>
                <Typography variant="subtitle1" color="text.secondary">Cantidad De Entradas</Typography>
                <ButtonGroup orientation="horizontal" variant="contained" size="medium" >
                    <Button variant="contained" color="secondary" onClick={() => setValor(valor + 1)}><AddIcon /></Button>
                    <Button variant="outlined" color="secondary" onClick={() => setValor(1)}>{valor}</Button>
                    <Button disabled={valor===0} variant="contained" color="secondary" onClick={() => setValor(valor - 1)}><RemoveIcon /></Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary"> Total:${valor*price.price}</Typography>
            </Grid>



        </Grid>

    )
}