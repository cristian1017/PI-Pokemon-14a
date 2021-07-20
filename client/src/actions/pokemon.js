import axios from "axios";

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_DETAIL = 'GET_DETAIL'
export const SELECT_TYPE = 'SELECT_TYPE'
export const CREATED = 'CREATED'
export const SELECT_OTRO = 'SELECT_OTRO'

export const getPokemons = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/pokemons')
            .then(({ data }) => {
                dispatch({
                    type: GET_POKEMONS,
                    payload: data
                });
            })
            .catch(err => { console.log(err) })
    }
}

export const getCreated = () => {
    //crear funcion que trae los creados
    return (dispatch) => {
        axios.get('http://localhost:3001/pokemonsCreated')
            .then(({ data }) => {
                dispatch({
                    type: GET_POKEMONS,
                    payload: data
                });
            })
            .catch(err => err)
    }
}

export const getPokemonDetail = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/pokemons/${id}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_DETAIL,
                    payload: data
                })
            })
    }
}

export const selectType = (select) => {
    return {
        type: SELECT_TYPE,
        payload: select
    }
}

export const selectOther = (select) => {
    return {
        type: SELECT_OTRO,
        payload: select
    }
}

export const created = (ToF) => {
    return {
        type: CREATED,
        payload: ToF
    }
}