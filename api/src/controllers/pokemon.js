require('dotenv').config();
const { response, request } = require('express');
const { Pokemon, Tipo } = require('../db')
const { v4: uuidv4 } = require('uuid');
const { urls } = require('../helpers/types');
const { API } = process.env;
const axios = require("axios");

let newId = 1000;
let newData = [];
const getPokemons = async (req = request, res = response) => {
    if (req.query.name) {
        const { name } = req.query;

        try {
            const { data } = await axios.get(`${API}/${name}`);
            const detail = {
                id: data.id,
                name: data.name,
                img: data.sprites.front_default,
                tipos: data.types.map((t) => {
                    typesprite = urls?.find((u) => u.name === t.type.name);
                    return { name: t.type.name, image: typesprite?.url };
                }),
            };
            res.json(detail);
        } catch (error) {
            const pokemonFound = await Pokemon.findOne({
                where: { name },
                include: [
                    {
                        model: Tipo,
                        as: 'tipos',
                        attributes: ["name", "image"],
                        through: { attributes: [] }
                    },
                ],
            });
            if (!pokemonFound) return res.send('Lo sentimos, no pudimos encontrar ese Pokemon')
            else return res.json(pokemonFound)
        }

    } else {
        if (newData?.length < 40) {
            for (let i = 1; i < 41; i++) {
                try {
                    let poke = axios.get(
                        `${API}/${i}`
                    );
                    newData.push(poke);
                    console.log(newData)
                } catch (error) {
                    console.log('no se pudo guardar')
                }
            }
        }
        res.json((await Promise.all(newData)).map(({ data }) => {
            const poke = {
                id: data.id,
                name: data.name,
                img: data.sprites.front_default,
                strength: data.stats[1].base_stat,
                tipos: data.types.map((t) => {
                    typesprite = urls?.find((u) => u.name === t.type.name);
                    return { name: t.type.name, image: typesprite?.url };
                }),
            };
            return poke;
        }));
    }
}
const getPokemonID = async (req = request, res = response) => {
    const { id } = req.params;
    console.log(id)

    try {

        const { data } = await axios.get(`${API}/${id}`);
        const detail = {
            id: data.id,
            name: data.name,
            hp: data.stats[0].base_stat,
            imge:
                data.sprites.versions["generation-v"]["black-white"].animated
                    .front_default,
            strength: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            weight: data.weight,
            height: data.height,
            tipos: data.types.map((t) => {
                typesprite = urls?.find((u) => u.name === t.type.name);
                return { name: t.type.name, image: typesprite?.url };
            }),
        };
        res.json(detail);
    } catch (error) {
        const pokemon = await Pokemon.findOne({
            where: { id },
            include: [
                {
                    model: Tipo,
                    as: 'tipos',
                    attributes: ["name"],
                    through: { attributes: [] },
                },
            ],
        });
        if (!pokemon) return res.send('Not Found')
        res.json({
            ok: false,
            msg: 'ERROR, no se encontro pokemon'
        })
    }


}

const addPokemon = async (req = request, res = response) => {
    const { name, hp, strength, defense, speed, height, weight, tipo1, tipo2 } = req.body;
    const tipos = [parseInt(tipo1), parseInt(tipo2)]
    const randomIMG = Math.round(Math.random() * 1000);

    const newPokemon = await Pokemon.create({
        id: newId++,
        name,
        hp: hp,
        strength: strength,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${randomIMG}.png`
    });
    try {
        newPokemon.setTipos(tipos)
    } catch (error) {
        res.json({
            ok: false,
            msg: 'ERROR al crear pokemon'
        })
    }
    res.status(200).json(newPokemon);
}

const getPokemonAdd = async (req = request, res = response) => {
    const pokemonCreated = await Pokemon.findAll({
        include: [
            {
                model: Tipo,
                as: 'tipos',
                attributes: ["name", "image"],
                through: { attributes: [] }
            },
        ]
    })
    res.json(pokemonCreated)
}

module.exports = {
    getPokemons,
    getPokemonID,
    addPokemon,
    getPokemonAdd
}