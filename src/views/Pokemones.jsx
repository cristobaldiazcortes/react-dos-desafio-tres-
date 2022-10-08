import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    <div className="mt-5">
      <h1>Selecciona un Pokemon</h1>
      <select name="" onChange={(e) => setUrl(e.target.value)}>
        {nombresPokemon.map((nombrePokemon)=>(
          <option key={nombrePokemon.url} value={nombrePokemon.name}>{nombrePokemon.name}</option>

        ))}
      </select>
      <button onClick={irAlPokemon}>ver detalle</button>
    </div>
  );
  }

