import { ButtonGroup, Button, Typography, Box } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"

const style = {

};

export default function Entradas(price) {
    const [adultos, setAdultos] = useState(0)
    const [ninios, setNinios] = useState(0)
    const [jubilados, setJubilados] = useState(0)

    return (
        <Box sx={style}>
            <Typography variant="subtitle1" color="text.secondary">Entradas Adultos</Typography>
            <ButtonGroup orientation="horizontal" variant="contained" size="medium" >
                <Button variant="contained" color="secondary" onClick={() => setAdultos(adultos + 1)}><AddIcon /></Button>
                <Button variant="outlined" color="secondary" onClick={() => setAdultos(0)}>{adultos}</Button>
                <Button variant="contained" color="secondary" onClick={() => setAdultos(adultos - 1)}><RemoveIcon /></Button>
            </ButtonGroup>
            <Typography variant="subtitle1" color="text.secondary">Entradas Niños</Typography>
            <ButtonGroup orientation="horizontal" variant="contained" size="medium" >
                <Button variant="contained" color="secondary" onClick={() => setNinios(ninios + 1)}><AddIcon /></Button>
                <Button variant="outlined" color="secondary" onClick={() => setNinios(0)}>{ninios}</Button>
                <Button variant="contained" color="secondary" onClick={() => setNinios(ninios - 1)}><RemoveIcon /></Button>
            </ButtonGroup>
            <Typography variant="subtitle1" color="text.secondary">Entradas Jubilados</Typography>
            <ButtonGroup orientation="horizontal" variant="contained" size="medium" >
                <Button variant="contained" color="secondary" onClick={() => setJubilados(jubilados + 1)}><AddIcon /></Button>
                <Button variant="outlined" color="secondary" onClick={() => setJubilados(0)}>{jubilados}</Button>
                <Button variant="contained" color="secondary" onClick={() => setJubilados(jubilados - 1)}><RemoveIcon /></Button>
            </ButtonGroup>
            

        </Box>

    )
}