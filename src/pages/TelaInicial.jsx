import React from "react";
import "../assets/styles/home.css";
import CampoInput from "../components/CampoInput";
import Card from "../components/Card";
import Lateral from "../components/Lateral";
import Modal from "../components/Modal";

const TelaInicial = () => {
  return (
    <>
    <main className="tela_inicial">
      <Lateral />
      <section className="lat_events">
        <div className="eventos">
          <CampoInput
            className="input_pesquisa"
            name="search"
            type="text"
            placeholder="Buscar eventos"
            source="/src/assets/images/lupa.png"
            icon="icon"
            required
          />
          <h1>Bem-Vindo(a), Fulana</h1>
          <div className="cards">
            <Card source="/src/assets/images/imagem 1.png" />
            <Card source="/src/assets/images/imagem 2.png" />
            <Card source="/src/assets/images/imagem 3.png" />
          </div>
        </div>
      </section>
    <Modal />
      
    </main>

    </>
    
  );
};

export default TelaInicial;
