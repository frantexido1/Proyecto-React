import { InputLabel, FormControl,Select,MenuItem} from "@mui/material";
import { useState } from "react";

export default function SelectModal(prop){
    const [cine,setCine]=useState("");
    const handleChange = (e) => {
      setCine(e.target.value);
    };
    return (
        <FormControl fullWidth color="secondary">
        <InputLabel id="demo-simple-select-label">Seleccione Cine</InputLabel>
          <Select 
          labelId="demo-simple-select-label" 
          id="demo-simple-select" 
          value={cine} 
          label="Seleccione Cine" 
          onChange={handleChange}
          color="secondary"
          >
            <MenuItem value={1}>Cinépolis Avellaneda</MenuItem>
            <MenuItem value={2}>Cinépolis Merlo</MenuItem>
            <MenuItem value={3}>Cinépolis Recoleta</MenuItem>
            <MenuItem value={4}>Cinépolis Pilar</MenuItem>
            <MenuItem value={5}>Cinépolis Lujan</MenuItem>
          </Select>
       </FormControl>
    )
}