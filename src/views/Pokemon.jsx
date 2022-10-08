import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Personajes() {
  const { name } = useParams();
  //console.log(name)
  const [nombrePokemon, setNombrePokemon] = useState({});
  const [img, setImg] = useState({});
  const [stats, setStats] = useState([]);
  const [tipos, setTipos] = useState([]);

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const url = `${baseUrl}${name}`;
  console.log(url + "  HOLA");

  const mostrarData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setNombrePokemon(data);
    setImg(data.sprites.other.dream_world);
    setStats(data.stats);
    setTipos(data.types);
  };

  useEffect(() => {
    mostrarData();
  }, []);

  return (
    <div className="mt-5">
      <img src={img.front_default}></img>

      <h3>{name}</h3>
      <ul>
        {stats.map((stat) => (
          <li key={stat.stat.url}>
            <h4>
              {stat.stat.name}: {stat.base_stat}
            </h4>
          </li>
        ))}
      </ul>
      
      {tipos.map((tipo) => (
              <h3 key={tipo.type.name}>
                <b>{tipo.type.name}</b>
              </h3>
            ))}
    </div>
  );
}
