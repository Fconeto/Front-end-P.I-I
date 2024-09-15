import React from "react";
import "../assets/styles/home.css";
import Lateral from "../components/Lateral";
import Eventos from "../components/Eventos";

const MeusEventos = () => {
  return (
    <>
      <main className="tela_inicial">
        <Lateral />
        <section className="lat_events">
          <div className="eventos">
            <Eventos />
          </div>
        </section>
      </main>
    </>
  );
};

export default MeusEventos;
