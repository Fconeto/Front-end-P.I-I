import React from "react";
import "../assets/styles/home.css";
import Lateral from "../components/Lateral";
import EditarPerfil from "../components/EditarPerfil";

const Perfil = () => {
  return (
    <main className="tela_inicial">
      <Lateral />
      <section className="lat_events">
        <div className="eventos">
          <EditarPerfil />
        </div>
      </section>
    </main>
  );
};

export default Perfil;
