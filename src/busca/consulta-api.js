import { useEffect, useState } from "react";
import React from 'react';

const Busca = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon'

    const [data, setData] = useState([])

    const pegarPokemons = async () => {
        const resposta = await fetch(url)
        const pokemons = await resposta.json()
        console.log(pokemons)

        setData(pokemons.results)
    }

    useEffect( () => {
        pegarPokemons()
    }, [])

    return(<>
        <section>{data.map( (c) => {
            return<>
                <h2>{c.name}</h2>
                <p>{c.url}</p>
            </>
        })}</section>
    </>);
}

export default Busca;