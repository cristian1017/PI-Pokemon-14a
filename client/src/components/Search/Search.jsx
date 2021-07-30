import axios from 'axios';
import React, { useState } from 'react';
import { Card } from '../Pokemon/Card';
import { Link } from 'react-router-dom';
import './Search.scss';


export const Search = () => {
    const [state, setState] = useState({ search: "", submit: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `http://localhost:3001/pokemons?name=${state.search}`
    );
    
    console.log(data);
    setState({ ...state, submit: data });
  };

  return (
    <div className="containerSearch">
      <form onSubmit={handleSubmit}>
        <input 
          className="containerSearch__text"
          type="text"
          placeholder="Buscar Pokemon"
          value={state.search}
          onChange={(e) => {
            setState({ ...state, search: e.target.value });
          }}
        />
        <input 
          className="containerSearch__submit" 
          type="submit" 
          value="Buscar" 
        />
      </form>
      <div className="containerSearch__card">
        <Link
          to={state.submit.id ? `/details/${state.submit.id}`: '/home'}
          style={{ textDecoration: "none" }}
        >
          {
            console.log(state.submit.id)
          }
          <Card
            key={state.submit.id}
            name={state.submit.name}
            img={state.submit.img || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ce212da-22a2-4830-85cc-f5e5affc5cd6/dcxehfe-dd22d80d-4cff-49bf-be56-bb51f5ea0a78.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2NlMjEyZGEtMjJhMi00ODMwLTg1Y2MtZjVlNWFmZmM1Y2Q2XC9kY3hlaGZlLWRkMjJkODBkLTRjZmYtNDliZi1iZTU2LWJiNTFmNWVhMGE3OC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.SU4WFqdvx7X92fK4EULHfUIVdib6_qYslDn2PbOcI4Y'}
            tipo={state.submit.tipos?.map((t) => t.image)}
          />
        </Link>
      </div>
    </div>
  );
}
