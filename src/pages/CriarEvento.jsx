import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoInput from "../components/CampoInput";
import authService from "../services/authService";
import "/src/assets/styles/criarEventos.css";

const CriarEvento = () => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [sala, setSala] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("");
  const [horarioFim, setHorarioFim] = useState("");
  const [vagas, setVagas] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  // Função para criar o evento
  const handleCriarEvento = async (e) => {
    e.preventDefault();
    try {
      // Converte a data e horários para o formato ISO se necessário
      // O formato 'YYYY-MM-DD' para a data e 'HH:MM' para o horário são aceitos diretamente
      console.log(nome);

      const novoEvento = {
        nome,
        data, // Mantém a data no formato 'YYYY-MM-DD' que é aceito diretamente pelo back-end
        horaInicio: String(horarioInicio), // Converte horaInicio para string no formato 'HH:MM'
        horaFim: String(horarioFim), // Converte horaFim para string no formato 'HH:MM'
        localizacao: sala,
        descricao,
        vagas: parseInt(vagas, 10), // Converte vagas para número inteiro
      };


      // Envia os dados para o back-end usando o serviço
      await authService.createEvent(novoEvento);

      // Redireciona para a página inicial após a criação
      navigate("/home");
    } catch (error) {
      console.error("Erro ao criar evento:", error);
    }
  };

  return (
    <div className="eventos">
      <h1>Criar Evento</h1>
      <form className="form_evento" onSubmit={handleCriarEvento}>
        <label htmlFor="nome">Nome:</label>
        <CampoInput
          className="input_edit"
          name="nome"
          type="text"
          placeholder="Nome"
          icon="icon"
          value={setNome}
        />

        <label htmlFor="data">Data:</label>
        <CampoInput
          className="input_edit"
          name="data"
          type="date"
          placeholder="Data"
          icon="icon"
          value={setData}
        />

        <label htmlFor="sala">Sala:</label>
        <select className="input_edit" name="sala">
          <option value="">Selecione</option>
          <option value="Sala 1">Sala 1</option>
          <option value="Sala 2">Sala 2</option>
          <option value="Sala 3">Sala 3</option>
          <option value="Sala 4">Sala 4</option>
          <option value="Sala 5">Sala 5</option>

        </select>

        <label htmlFor="horarioInicio">Horário de Início:</label>
        <CampoInput
          className="input_edit"
          name="horarioInicio"
          type="time"
          placeholder="Horário de Início"
          icon="icon"
          value={setHorarioInicio}
        />

        <label htmlFor="horarioFim">Horário de Fim:</label>
        <CampoInput
          className="input_edit"
          name="horarioFim"
          type="time"
          placeholder="Horário de Fim"
          icon="icon"
          value={setHorarioFim}
        />

        <label htmlFor="vagas">Vagas:</label>
        <CampoInput
          className="input_edit"
          name="vagas"
          type="number"
          placeholder="Número de Vagas"
          icon="icon"
          value={setVagas}
        />

        <label htmlFor="descricao">Descrição:</label>
        <CampoInput
          className="input_edit"
          name="descricao"
          type="text"
          placeholder="Descrição do Evento"
          icon="icon"
          value={setDescricao}
        />

        <button className="input_login button" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CriarEvento;
