import React from 'react';
import {  NavLink } from "react-router-dom";

export const Pagination = ({ pokemonsForPage, totalPokemons, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsForPage); i++) {
    pageNumbers.push(i);
  }

  return ( 
    <>
        <nav className="pagination">
          {pageNumbers.map((n) => (
            <NavLink to="#" className="links" key={n} onClick={() => pagination(n)} >
              {n}
            </NavLink>
          ))}
        </nav>
    </>
  );
}
