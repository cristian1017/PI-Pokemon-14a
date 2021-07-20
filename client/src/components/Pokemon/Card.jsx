import React from "react";
import { DetailsCards } from "../Details/DetailsCards";
import './Card.scss'

export const Card = ({ name, img, tipo }) => {


  return (
    <div className="main">
      <div className="main__container">
        <div className="main__container-marco" >
          <div className="container__marco-types">
            {tipo?.map((tipo) => (

              <embed
                key={tipo}
                src={tipo}
                alt="pokemon"
              /> //cambiar en /Cards.js
            ))}
          </div>
          <img className="container__marco-img" src={img} width="200" alt="" />

          <div className="container__marco-content">
            <div>
              <span className="content__name" >{name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
