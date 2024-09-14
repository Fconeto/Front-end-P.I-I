import React from "react";
import "../assets/styles/home.css";
import IconButton from "../components/IconButton";

const TelaInicial = () => {
  return (
    <main className="">
      <section className="lat_nav">
        <img source="/src/assets/images/perfil.png" alt="Background" />
        <IconButton
          className="icon_button"
          source="/src/assets/images/do-utilizador (1).png"
          texto="Início"
        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/silhueta-de-icone-de-casa.png"
          texto="Início"
        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/evento-eleitoral-em-um-calendario-com-o-simbolo-de-estrela (1).png"
          texto="Início"
        />
      </section>

      <section>aaaaaaaaaaasadaaaaaaa</section>
    </main>
  );
};

export default TelaInicial;
