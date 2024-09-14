import React from "react";
import "../assets/styles/login.css";
import CampoInput from "./CampoInput";

const CadastroForm = () => {
  return (
    <main className="login_container">
      <section className="login_titulo">
        <h1>CADASTRE-SE</h1>
        <span>
          Já possui uma conta? <a href="/cadastro">Entre</a>
        </span>
      </section>

      <form className="login_form">
        <div className="login_field">
          <label htmlFor="email">E-mail</label>
          <CampoInput
            className="input_login"
            name="email"
            type="email"
            placeholder="Digite aqui seu e-mail"
            source="/src/assets/images/e-mail.png"
          />

          <label htmlFor="senha">Senha</label>
          <CampoInput
            className="input_login"
            name="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            source="/src/assets/images/senha.png"
          />

          <label htmlFor="senha">Senha</label>
          <select className="input_login">
            <option>Estudante</option>
            <option>Professor(a)</option>
          </select>

          <button className="input_login button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default CadastroForm;
