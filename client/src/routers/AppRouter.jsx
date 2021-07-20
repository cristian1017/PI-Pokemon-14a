import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InitialScreen } from '../components/PaginaInicial/InitialScreen';
import { HomeScreen } from '../components/Home/HomeScreen';
import { FormPokemon } from '../components/Form/FormPokemon';
import { DetailsCards } from '../components/Details/DetailsCards';

export const AppRouter = () => {
    return (
        <Router>
            <div> 
                <Switch>
                    <Route exact path="/" component={InitialScreen}/>
                    <Route path="/home" component={HomeScreen}/>
                    <Route path="/details/:id" component={DetailsCards}/> 
                    <Route path="/create" component={FormPokemon}/> 

                </Switch>
            </div>
        </Router>
    )
}
