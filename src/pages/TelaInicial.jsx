import React from "react";
import "../assets/styles/home.css";
import Lateral from "../components/Lateral";
import Modal from "../components/Modal";
import BuscaEventos from "../components/BuscaEventos";

const TelaInicial = () => {
  return (
    <>
      <main className="tela_inicial">
        <Lateral />
        <section className="lat_events">
          <div className="eventos">
            <BuscaEventos />
          </div>
        </section>
        <Modal />
      </main>
    </>
  );
};

export default TelaInicial;
