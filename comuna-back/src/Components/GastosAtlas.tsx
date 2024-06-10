import Layout from '../Layout/Layout';
import { Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
// import { API_HOST } from '../constantes';

function GastoAtlas() {
  const [fecha, setFecha] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const datos = {
      fecha,
      monto,
      descripcion,
    };
    axios
      .post("/gastos", datos)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h2>Gasto</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label=""
            type="date"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
          <TextField
            label="Monto:"
            type="number"
            value={monto}
            onChange={(event) => setMonto(event.target.value)}
          />
          <TextField
            label="Descripción:"
            type="text"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </Stack>
      </form>
      <Layout />
    </>
  );
}

export default GastoAtlas;