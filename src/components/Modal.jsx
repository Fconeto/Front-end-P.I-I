import React, { useState } from "react";
import "../assets/styles/modal.css";
import userService from "../services/authService";

const Modal = ({ modalAtivo, setModalAtivo, evento }) => {
  const [error, setError] = useState(null);

  const fechar = () => {
    setModalAtivo(false);
  };

  const handleClickForaModal = (e) => {
    if (e.target.id === "modal") {
      fechar();
    }
  };

  const inscrever = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await userService.login(email, senha);
      console.log("Login bem-sucedido:", response);
      navigate("/home");
    } catch (err) {
      err ? setError(err) : setError("Erro de conexão");
    }
  };

  // Verifica se o evento existe antes de acessar suas propriedades
  if (!evento) {
    return null;
  }

  const formatarData = (data) => {
    const date = new Date(data);
    return date.toISOString().split('T')[0]; // Remove a parte do horário
  };

  return (
    <div
      onClick={handleClickForaModal}
      id="modal"
      className={`espaco ${modalAtivo ? "" : "desativado"}`}
    >
      <section className="modal">
        <img
          onClick={fechar}
          className="seta"
          src="/src/assets/images/sinal-de-seta-para-baixo-para-navegar.png"
          alt="Fechar"
        />
        <h3>{evento.nome}</h3>
        <div>
          <h4>Apresentação</h4>
          <h5>{evento.descricao}</h5>
        </div>

        <div className="programacao">
          <h4>Programação</h4>
          <span>Data: {formatarData(evento.data)}</span>
          <span>Horário: {evento.horaInicio} às {evento.horaFim}</span>
          <span>Local: {evento.localizacao}</span>
        </div>
        <span>Vagas: {evento.vagas}</span>
        <button onClick={inscrever} className="input_button">Inscrever-se</button>
      </section>
    </div>
  );
};

export default Modal;
