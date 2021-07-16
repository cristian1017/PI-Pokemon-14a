require('dotenv').config();
const axios = require("axios");
const { Tipo } = require('../db');
const { urls } = require('./types')

const { API_TYPE } = process.env;


const precharge = async() => {
    const { data } = await axios.get(`${API_TYPE}`);
    tipos = data.results;
    tipos.forEach(async (tipo) => {
        typesprite = urls?.find(u => u.name === tipo.name)
        let t = await Tipo.create({
          name: tipo.name,
          image: typesprite?.url,
        });
    });
}

module.exports = {precharge};
