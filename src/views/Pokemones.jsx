import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
export default function Personajes() {
  const [url, setUrl] = useState("");
  const [nombresPokemon, setNombresPokemon] = useState([]);

  const navigate = useNavigate();

  const irAlPokemon = () => {
    navigate(`/pokemones/${url}`);
  }

  useEffect(() => {
    const mostrarData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")
      const data = await response.json()
      console.log(data)

      if(data && data.results) {
        const obtenerNombreUrl = data.results.map((nombrePokemon) => ({ name: nombrePokemon.name, url: nombrePokemon.url }))   
        // console.log(obtenerNombreUrl)
        setNombresPokemon(obtenerNombreUrl)
      }
    }
    mostrarData()
  },[])
  

  return (
    <div className="container-select">
      <h1>Selecciona un Pokemon</h1>
      <Form.Select name="" onChange={(e) => setUrl(e.target.value)}>
        {nombresPokemon.map((nombrePokemon)=>(
          <option key={nombrePokemon.url} value={nombrePokemon.name}>{nombrePokemon.name}</option>

        ))}
      </Form.Select>
      <br></br>
      <Button variant="dark" size="lg" onClick={irAlPokemon}>ver detalle</Button>
    </div>
  );
  }

