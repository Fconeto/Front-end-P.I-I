import React, { useState, useEffect } from "react";
import Eventos from "../components/Eventos";
import SemEventos from "../components/SemEventos";
import authService from "../services/authService"; // Supondo que authService lidere as chamadas para o back-end.
import Card from "../components/Card";
import Modal from "../components/Modal";

const MeusEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [modalAtivo, setModalAtivo] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  const buscarEventos = async () => {
    try {
      const response = await authService.getEventos();
      setEventos(response); // Atualiza o estado com os eventos recebidos
    } catch (error) {
      console.error("Erro ao buscar eventos: ", error);
    }
  };

  useEffect(() => {
    buscarEventos(); // Chama a função para buscar os eventos quando o componente for montado
  }, []);

  const formatarData = (data) => {
    const date = new Date(data);
    return date.toISOString().split('T')[0]; // Remove a parte do horário
  };

  const abrirModal = (evento) => {
    setEventoSelecionado(evento);
    setModalAtivo(true);
  };

  return (
    <>
      <Modal modalAtivo={modalAtivo} setModalAtivo={setModalAtivo} evento={eventoSelecionado} />
      <h1>Meus eventos</h1>
      {eventos.length > 0 ? (
        eventos.map((evento, index) => (
          <Card
            key={index}
            setModalAtivo={() => abrirModal(evento)}
            source={"/src/assets/images/imagem 1.png"}
            nome={evento.nome}
            descricao={evento.descricao}
            data={formatarData(evento.data)}
            horario={evento.horaInicio + " - " + evento.horaFim}
            local={evento.localizacao}
            vagas={evento.vagas}
          />
        ))
      ) : (
        <SemEventos />
      )}
    </>
  );
};

export default MeusEventos;
