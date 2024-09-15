import React from "react";
import "../assets/styles/home.css";
import CampoInput from "../components/CampoInput";
import Lateral from "../components/Lateral";

const Perfil = () => {
  return (
    <main className="tela_inicial">
      <Lateral />
      <section className="lat_events">
        <div className="eventos">
          <form>
            <img src="/src/assets/images/perfil.png" alt="Perfil" />
            <div>
                <label htmlFor="nome">Nome</label>
                <CampoInput 
                className="input_pesquisa"
                name="nome"
                type="text"
                placeholder="nome"
                source="/src/assets/images/cartao-de-identidade.png"
                icon="icon"
                required/>
                <label htmlFor="email">E-mail</label>
                <CampoInput 
                className="input_pesquisa"
                name="email"
                type="email"
                placeholder="email"
                source="/src/assets/images/e-mail 2.png"
                icon="icon"
                required/>
                <label htmlFor="senha">Senha</label>
                <CampoInput 
                className="input_pesquisa"
                name="senha"
                type="password"
                placeholder="senha"
                source="/src/assets/images/senha 2.png"
                icon="icon"
                required/>

            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Perfil;
