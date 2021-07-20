import React from 'react';
import { Buttons } from '../Buttons/Buttons';
import { Nav } from '../Nav/Nav';
import { Cards } from '../Pokemon/Cards';
import { Search } from '../Search/Search';
import './Home.scss';



export const HomeScreen = () => {
    return (
        <>
        <Nav /> 
            <div className="mainHome">
                <div>
                </div>
                <div>
                    <Buttons />
                </div>
                <div className="mainHome__container">
                    <div className="mainHome__container-cards">
                        <Cards />
                    </div>
                    <div className="mainHome__container-search">
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}

