import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Busca from './pages/consulta-api';
import Detalhes from './pages/descricao';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Busca />}/>
            <Route path="/descricao" element={<Detalhes />}/>
        </Routes>
    </BrowserRouter>
);
