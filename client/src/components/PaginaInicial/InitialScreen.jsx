import React from 'react';
import './PaginaInicial.scss';

export const InitialScreen = ({ history }) => {

    const handleInitial = () => {
        history.replace('/home')
    }

    return (
        <div className="containerScreen">
            <div className="containerScreen__title">
                <h1 className="letra1">B</h1>
                <h1 className="letra2">I</h1>
                <h1 className="letra3">E</h1>
                <h1 className="letra4">N</h1>
                <h1 className="letra5">V</h1>
                <h1 className="letra6">E</h1>
                <h1 className="letra7">N</h1>
                <h1 className="letra8">I</h1>
                <h1 className="letra9">D</h1>
                <h1 className="letra10">O</h1>
            </div>
            <div className="buttonIngresar">
                <input type="submit" value='Ingresar' onClick={handleInitial}/>
            </div>
        </div>
    )
}
