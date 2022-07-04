import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";





export default function SelectModal2() {
  const [fecha, setFecha] = useState("");
  const handleChange = (e) => {
    setFecha(e.target.value);
  };
  let fechaActual = new Date();
  const diaDeSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];



  return (
    <FormControl color="secondary" sx={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-label">Seleccione Dia</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={fecha}
        label="Seleccione Dia"
        onChange={handleChange}
        sx={{ marginBottom: "30px", color: "text.secondary" }}
      >

        <MenuItem value={0} sx={{ color: "text.secondary" }}>{`${diaDeSemana[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${mes[fechaActual.getMonth()]}`}</MenuItem>

        <MenuItem value={1} sx={{ color: "text.secondary" }}>{`${diaDeSemana[fechaActual.getDay() + 1]}, ${fechaActual.getDate() + 1} de ${mes[fechaActual.getMonth()]}`}</MenuItem>

        <MenuItem value={2} sx={{ color: "text.secondary" }}>{`${diaDeSemana[fechaActual.getDay() + 2]}, ${fechaActual.getDate() + 2} de ${mes[fechaActual.getMonth()]}`}</MenuItem>

        <MenuItem value={3} sx={{ color: "text.secondary" }}>{`${diaDeSemana[fechaActual.getDay() + 3]}, ${fechaActual.getDate() + 3} de ${mes[fechaActual.getMonth()]}`}</MenuItem>

      </Select>
    </FormControl>
  )
}