import React from "react";
import "../assets/styles/login.css";
import CampoInput from "./CampoInput";

const LoginForm = () => {
  return (
    <main className="login_container">
      <section className="login_titulo">
        <h1>LOGIN</h1>
        <span>
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
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
            icon="icon"
            required
          />

          <label htmlFor="senha">Senha</label>
          <CampoInput
            className="input_login"
            name="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            source="/src/assets/images/senha.png"
            icon="icon"
            required
          />

          <button className="input_login button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
