import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaInicial from './pages/TelaInicial';
import Perfil from './pages/Perfil';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/home" element={<TelaInicial />} />
        <Route exact path="/perfil" element={<Perfil />} />

      </Routes>
    </Router>
  );
};
export default App
