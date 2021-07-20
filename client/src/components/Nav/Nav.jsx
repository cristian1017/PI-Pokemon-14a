import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

export const Nav =  (params) => {
  return (
    <div className="mainNav" >
      <Link to='/home'>
        <img className="mainNav__img-home"  alt='Pokebola' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" />
      </Link>
      <Link to='/'>
      <img className="mainNav__img-pokemon"   alt='pokemon' src='https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png' />
      </Link>
      <Link to='/create'>
        <img className="mainNav__img-create" alt='incubadora'  src='https://image.flaticon.com/icons/png/512/188/188962.png' />
      </Link>
    </div>
  );
}
