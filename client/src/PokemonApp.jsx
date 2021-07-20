import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import './PokemonApp.scss';

export const PokemonApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

