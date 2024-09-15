import React from "react";
import "../assets/styles/home.css";
import Card from "../components/Card";
import SemEventos from "../components/SemEventos";

const Eventos = () => {
  return (
    <>
      <h1>Meus eventos</h1>
      <SemEventos />
      <div className="cards">
        <Card source="/src/assets/images/imagem 1.png" />
        <Card source="/src/assets/images/imagem 2.png" />
        <Card source="/src/assets/images/imagem 3.png" />
      </div>
    </>
  );
};

export default Eventos;
