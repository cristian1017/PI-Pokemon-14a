import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreated, getPokemons } from "../../actions/pokemon";
import { Link } from "react-router-dom";
import { Pagination } from "../pagination/Pagination";
import { Card } from "./Card";
import './Cards.scss'


export const Cards = () => {
  const [pokes, setPokes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsForPage, setPokemonsForPage] = useState(12);
  const { pokemons, filterState, filterOther } = useSelector(state => state.pokemon);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { created } = useSelector(store => store)
  //llamado a los pokemons, antes se hacia al montarse app pero no cargaban las cards de los pokes automaticamente
  useEffect(() => {
    const feth = async () => {
      setLoading(true)
      await dispatch(getPokemons());
      setLoading(false)
    }
    feth()
  }, []);

  useEffect(() => {
    const Crea = async () => {
      setLoading(true)
      await dispatch(getCreated());
      setLoading(false)
    }
    const feth = async () => {
      setLoading(true)
      await dispatch(getPokemons());
      setLoading(false)
    }
    if (created === true) Crea()
    if (created === false) feth()
  }, [created]);

  //paginacion
  const indexOfLastPoke = currentPage * pokemonsForPage;
  const indexOfFirstPoke = indexOfLastPoke - pokemonsForPage;
  const currentPokemons = pokes.slice(indexOfFirstPoke, indexOfLastPoke);


  //filtrado entre tipos de pokemon
  useEffect(() => {
    if (filterState === "ninguno") return setPokes(pokemons);
    setPokes(
      pokemons?.filter(({ tipos }) =>
        tipos.some((tipo) => tipo.name === filterState)
      )
    );
  }, [filterState, pokemons]);

  //ordenamiento x fuerza y x nombre
  useEffect(() => {
    if (filterOther === "alfaAsc")
      return setPokes(
        [...pokes].sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        )
      );
    else if (filterOther === "alfaDsc")
      return setPokes(
        pokes.sort((a, b) =>
          a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        )
      );
    else if (filterOther === "MenFu")
      return setPokes(
        [...pokes].sort((a, b) =>
          a.strength > b.strength ? 1 : a.strength < b.strength ? -1 : 0
        )
      );
    else if (filterOther === "MaxFu")
      return setPokes(
        [...pokes].sort((a, b) =>
          a.strength < b.strength ? 1 : a.strength > b.strength ? -1 : 0
        )
      );
    else
      return setPokes(
        [...pokes].sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
      );
  }, [filterOther]);

  //si estan cargando los pokemones muestra un mensaje
  if (loading) {
    return <h2>Liberando Pokemones... Aguarde un momento</h2>;
  }

  const HandleSiguiente = () => {
    const sig = setCurrentPage(currentPage +1)
    return sig;
    
  }
  const HandleAnterior = () => {
    const ant = setCurrentPage(currentPage - 1)
    return ant;
  }

  return (
    <>
      <div className="container">
        {currentPokemons?.map((p) => (
          <Link key={p.id} to={`/details/${p.id}`} style={{ textDecoration: 'none' }}>
            <Card
              key={p.id}
              name={p.name}
              img={p.img}
              strength={p.strength}
              tipo={p.tipos?.map((t) => t.image)}
            />
          </Link>
        ))}
        <div className="buttonPagination">
          <div>
            <button
              className="button__previous"
              onClick={HandleAnterior}
            >
            PREVIOUS
            </button>
          </div>
          <div>
            <button
            className="button__next"
            onClick={HandleSiguiente}
            >NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

