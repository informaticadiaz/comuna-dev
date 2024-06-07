import Layout from '../Layout/Layout';
import { Stack, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


function IngresoAtlas() {
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const datos = {
      fecha,
      monto,
      descripcion
    };
    axios.post('https://back-comuna.vercel.app/ingresos', datos)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <h2>Ingreso</h2>
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
      <TextField label="" type="date" value={fecha} onChange={(event) => setFecha(event.target.value)} />
      <TextField label="Monto:" type="number" value={monto} onChange={(event) => setMonto(event.target.value)} />
      <TextField label="Descripción:" type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
      <Button type='submit'>Enviar</Button>
      </Stack>
    </form>
    <Layout sx={{ height: "100%" }} />
    </>
  );
}

export default IngresoAtlas;