import React from "react";
import "../assets/styles/home.css";
import IconButton from "../components/IconButton";


const Lateral = () => {
  return (
    <section className="lat_nav">
      <section>
        <img src="/src/assets/images/Logo 2.png" alt="Perfil" />
        <img src="/src/assets/images/perfil.png" alt="Perfil" />
      </section>
      <nav className="nav_buttons">
        <IconButton
          className="icon_button"
          source="/src/assets/images/silhueta-de-icone-de-casa.png"
          texto="Início"
          act="/"
        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/do-utilizador (1).png"
          texto="Perfil"
          act="perfil"

        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/evento-eleitoral-em-um-calendario-com-o-simbolo-de-estrela (1).png"
          texto="Meus Eventos"
          act="eventos"
        />
      </nav>
      <button>Sair</button>
    </section>
  );
};

export default Lateral;
