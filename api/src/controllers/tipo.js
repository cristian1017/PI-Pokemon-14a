const {request, response} = require('express')
const { Pokemon, Tipo } = require("../db.js");


const getTypes = async(req = request, res = response) => {
    const Types = await Tipo.findAll({
        order: [["id", "ASC"]],
        include: [
          {
            model: Pokemon,
            attributes: ["name", "id"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      res.json(Types);
}

module.exports = { getTypes }