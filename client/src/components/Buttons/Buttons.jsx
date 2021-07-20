import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { created, getCreated, selectOther, selectType } from "../../actions/pokemon";
import './Buttons.scss'

export const Buttons = () =>  {
  const [state, setState] = useState({ options: [], selected: "ninguno" });
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/types`)
      .then(({ data }) => setState({ ...state, options: data }))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(selectType(state.selected));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, selected: e.target.value });
  };

  const handleCreated = (e, ToF) => {
    e.preventDefault();
    dispatch(created());
    dispatch(getCreated());
  };

  const handleOrder = (e,order) => {
      e.preventDefault()
      dispatch(selectOther(order))
  }

  return (
    <div className="container__button">
      <button onClick={(e) => handleOrder(e, 'pred')}>Predeterminado</button>
      <button onClick={(e) => handleOrder(e, 'alfaAsc')}>A-Z</button>
      <button onClick={(e) => handleOrder(e, 'alfaDsc')}>Z-A</button>
      <button onClick={(e) => handleOrder(e, 'MenFu')}>Menor Fuerza</button>
      <button onClick={(e) => handleOrder(e, 'MaxFu')}>Mayor Fuerza</button>
      <button onClick={(e) => handleCreated(e, false)}>Originales</button>
      <button onClick={(e) => handleCreated(e, true)}>Creados</button>
      <form onSubmit={handleSubmit}>
        <select
          value={state.selected}
          onChange={handleChange}
          placeholder="Tipos"
        >
          <option value="ninguno">todos</option>
          {state.options.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Filtrar" />
      </form>
    </div>
  );
}
