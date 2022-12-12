import { useEffect, useState } from "react";
import React from 'react';
import Detalhes from './descricao';


const Busca = () => {

    const [data, setData] = useState([])
    const url = 'https://rickandmortyapi.com/api/character'

    const pegarPersonagens = async () => {
        const resposta = await fetch(url)
        const personagens = await resposta.json()
        
        setData(personagens.results)
    }

    useEffect( () => {
        pegarPersonagens()
    },[])

    return<section class="flex-container">{data.map( (p) => {
        return<div class="card text-bg-secondary mb-3">
            <img src={p.image} alt="personagem - {p.id}" class="card-img-top"/>
            <div class="card-body">
                <h5>{p.name.toUpperCase()}</h5>
                <a href="/descricao" class="btn btn-light">Mais sobre</a>
                <input type="hidden" id="urlCharacter" />
            </div>
        </div>
    })}</section>
}

export default Busca;