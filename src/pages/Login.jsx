import React from "react";
import LoginForm from "../components/LoginForm";
import "../assets/styles/login.css";

const Login = () => {
  return (
    <main className="view_login">
      <LoginForm />
      <section>
        <img
          className="login_img_desenho"
          src="/src/assets/images/Desenho.png"
          alt="Background"
        />
      </section>
    </main>
  );
};

export default Login;
