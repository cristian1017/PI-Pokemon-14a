import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "./DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../actions/pokemon";
import { urls } from "../../helpers/types";

export const DetailsCards = () => {
    const dispatch = useDispatch();
    const { pokemonDetails } = useSelector(store => store.pokemon);
    console.log(pokemonDetails)
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        const details = async () => {
            dispatch(getPokemonDetail(id))
        }
        details()
    }, [dispatch, id])


    if (pokemonDetails) {
        return (
            <DetailsCard
                key={pokemonDetails.id}
                id={pokemonDetails.id}
                name={pokemonDetails.name}
                img={pokemonDetails.imge || pokemonDetails.img}
                hp={pokemonDetails.hp}
                strength={pokemonDetails.strength}
                defense={pokemonDetails.defense}
                speed={pokemonDetails.speed}
                height={pokemonDetails.height}
                weight={pokemonDetails.weight}
                tipo={pokemonDetails.tipos?.image ?
                    pokemonDetails.tipos
                    :
                    pokemonDetails.tipos?.map((t) => {
                        let typesprite = urls?.find((u) => u.name === t.name);
                        return { name: t.name, image: typesprite?.url };
                    })
                } 
            />
        )
    } else {
        return <div>Sin Pokemon</div>;
    }
}
