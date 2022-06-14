import { ButtonGroup, Button, Typography, Box } from "@mui/material"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react"

const style = {
    margin:"5",
    p:"5"
  };

export default function Entradas(){
    const [valor, setvalor] = useState(0)
    return (
        <Box sx={style}>
            <Typography variant="button" color="text.secondary" sx={{margin:"10px"}}>Cantidad De Entradas: {valor} </Typography>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                size="small"
            >
                <Button variant="contained" color="secondary" onClick={()=>setvalor(valor + 1)}><ArrowDropUpIcon/></Button>
                <Button variant="contained" color="secondary" onClick={()=>setvalor(valor - 1)}><ArrowDropDownIcon/></Button>
            </ButtonGroup>
            <Typography variant="subtitle1" color="text.secondary">${valor*800}</Typography>
        </Box>

    )
}