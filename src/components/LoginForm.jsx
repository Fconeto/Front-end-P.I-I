import React from "react";
import "../assets/styles/login.css";

const LoginForm = () => {
  return (
    <main className="login_container">
      <section className="login_titulo">
        <h1>LOGIN</h1>
        <span>
          Não tem uma conta? <a>Cadastre-se</a>
        </span>
      </section>

      <form className="login_form">
        <div className="login_field">
          <label htmlFor="email">E-mail</label>
          <input
            className="input_login"
            name="email"
            type="email"
            placeholder="Digite aqui seu e-mail"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            className="input_login"
            name="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            required
          />

          <button className="button_login" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
