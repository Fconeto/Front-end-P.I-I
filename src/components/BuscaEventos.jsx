import React, { useState, useEffect } from "react";
import CampoInput from "../components/CampoInput";
import Card from "../components/Card";
import authService from "../services/authService";

const BuscaEventos = ({ setModalAtivo }) => {
  const [busca, setBusca] = useState("");
  const [eventos, setEventos] = useState([]);

  // Função para buscar os eventos do back-end
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

  useEffect(() => {
    console.log(eventos[0]); // Agora o console.log será executado quando eventos for atualizado
  }, [eventos]); // Executa sempre que 'eventos' for atualizado

  const formatarData = (data) => {
    const date = new Date(data);
    return date.toISOString().split('T')[0]; // Remove a parte do horário
  };

  return (
    <>
      <CampoInput
        className="input_pesquisa"
        name="search"
        type="text"
        placeholder="Buscar eventos"
        source="/src/assets/images/lupa.png"
        icon="icon"
        value={setBusca}
        required
      />
      <h1>Bem-Vindo(a), Fulana</h1>
      <div className="cards">
        {eventos.length > 0 ? (
          eventos.map((evento, index) => (
            <Card
              key={index}
              setModalAtivo={setModalAtivo}
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
          <p>Nenhum evento encontrado.</p>
        )}
      </div>
    </>
  );
};

export default BuscaEventos;
