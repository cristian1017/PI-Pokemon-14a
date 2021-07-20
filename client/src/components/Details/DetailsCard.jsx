import React from 'react';
import { Nav } from '../Nav/Nav';
import './DetailsCard.scss'

export const DetailsCard = ({
    id,
    name,
    img,
    tipo,
    hp,
    strength,
    defense,
    speed,
    height,
    weight,
}) => {
    return (
        <div className="mainDetailCard" >
        <Nav />
            <div className="mainDetailCard__container">
                <div className="mainDetailCard__container-card">
                    <img src={img} width='200' alt="" className="container__card-img" />

                    <div className="container__card-content">
                        <div>
                            <h1>{name}</h1>
                            <span className="content__id">#{id}</span>
                            <div>
                                <span>Vida:</span><span>{hp}</span>
                            </div>
                            <div>
                                <span>Fuerza:</span><span>{strength}</span>
                            </div>
                            <div>
                                <span>Defensa:</span><span>{defense}</span>
                            </div>
                            <div>
                                <span>Velocidad:</span><span>{speed}</span>
                            </div>
                            <div>
                                <span>Altura:</span><span>{height}</span>
                            </div>
                            <div>
                                <span>Peso:</span><span>{weight}</span>
                            </div>
                            <span className="content__title-type">Tipos:</span>
                            <div className="content__types">
                                {tipo?.map((tipo) => (
                                    <div key={tipo.name} className="content__types-type" >
                                        <img className="imgType" src={tipo.image}  alt='pokemon' />
                                        <span  className="container__card-name" >{tipo.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
