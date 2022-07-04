import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SelectModal({ option, title }) {
  const [cine, setCine] = useState("");
  const handleChange = (e) => {
    setCine(e.target.value);
  };
  return (
    <FormControl fullWidth sx={{ width: "100%" }} color="secondary">
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cine}
        label="Seleccione Cine"
        onChange={handleChange}
        sx={{ marginBottom: "30px", color: "text.secondary" }}
      >
        {option.map((item, idx) => <MenuItem value={idx} sx={{ color: "text.secondary" }}>{item}</MenuItem>)}
      </Select>
    </FormControl>

  )
}