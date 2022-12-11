import { useEffect, useState } from "react";
import React from 'react';



const Busca = () => {

    const [data, setData] = useState([])
    const url = 'https://rickandmortyapi.com/api/character'

    const pegarPersonagens = async () => {
        const resposta = await fetch(url)
        const personagens = await resposta.json()
        console.log(personagens.results)
        setData(personagens.results)
    }

    useEffect( () => {
        pegarPersonagens()
    },[])

    //<img src={getSource(key)}/>

    return<section class="flex-container">{data.map( (p) => {
        return<div class="card text-bg-secondary mb-3">
            <img src={p.image} alt="personagem - {p.id}" class="card-img-top"/>
            <div class="card-body">
                <h5>{p.name.toUpperCase()}</h5>
                <a href="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-mind-bending-season-mysteries-quidd-6.png" class="btn btn-light">Mais sobre</a>
            </div>
        </div>
    })}</section>
}

export default Busca;