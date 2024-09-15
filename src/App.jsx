import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaInicial from './pages/TelaInicial';
import Perfil from './pages/Perfil';
import MeusEventos from './pages/MeusEventos';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<TelaInicial />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/home" element={<TelaInicial />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/eventos" element={<MeusEventos />} />


      </Routes>
    </Router>
  );
};
export default App
