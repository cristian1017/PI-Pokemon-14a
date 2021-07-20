import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import './FormPokemon.scss'


export const FormPokemon = () => {
    const [body, setBody] = useState({
        name: "",
        hp: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        tipo1: 1,
        tipo2: 2,
    });
    const [options, setOptions] = useState([]);
    let history = useHistory()

    useEffect(() => {
        axios
            .get(`http://localhost:3001/types`)
            .then(({ data }) => setOptions(data));
    }, []);

    const changeHandler = (e) => {
        e.preventDefault();
        setBody({ ...body, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/pokemons", body)
            .then(({ data }) => history.push(`/home/${data.id}`));

        setBody({
            name: "",
            hp: "",
            strength: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            tipo1: 1,
            tipo2: 2,
        })


    };

    const selectHandler = (e) => {
        e.preventDefault()
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    return (
        <>

        <Nav />
        <div className="containerForm">
        
                <form className="form" onSubmit={submitHandler}>
                    <div className="form__title">Crea tu Pokemon!</div>

                    <div className="form_input-boxName">
                        <label >Nombre</label>
                        <input
                            className="inputName"
                            type="text"
                            value={body.name}
                            name="name"
                            placeholder="Ingrese el nombre"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form__details">
                        <div className="form__input-box">
                            <label className="detail">Vida</label>
                            <input
                                type="num"
                                value={body.hp}
                                name="hp"
                                placeholder="Ingrese la vida"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form__input-box">
                            <label className="detail">Fuerza</label>
                            <input
                                type="num"
                                value={body.strength}
                                name="strength"
                                placeholder="Ingrese la fuerza"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form__input-box">
                            <label className="detail">Defensa</label>
                            <input
                                type="num"
                                value={body.defense}
                                name="defense"
                                placeholder="Ingrese la defensa"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form__input-box">
                            <label className="detail">Velocidad</label>
                            <input
                                type="num"
                                value={body.speed}
                                name="speed"
                                placeholder="Ingrese la velocidad"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form__input-box">
                            <label className="detail">Altura</label>
                            <input
                                type="num"
                                value={body.height}
                                name="height"
                                placeholder="Ingrese la altura"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="form__input-box">
                            <label className="detail">Peso</label>
                            <input
                                type="num"
                                value={body.weight}
                                name="weight"
                                placeholder="Ingrese el peso"
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="form__select">
                        <div>Seleccione el tipo:</div>
                        <select className="form__select-box" value={body.tipo1} name="tipo1" onChange={selectHandler}>
                            {options?.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>

                        <select className="form__select-box" value={body.tipo2} name="tipo2" onChange={selectHandler}>
                            {options?.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="buttonCrear">
                        <input type="submit" value='Crear' />
                    </div>
                </form>
            </div>
        </>
    );
}
