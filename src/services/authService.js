import axios from "axios";

const API_URL = "http://localhost:5196/api";

const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/User/login`, {
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : null;
  }
};

const register = async (email, senha, ocupacao) => {
  try {
    const response = await axios.post(`${API_URL}/User/register`, {
      email,
      senha,
      ocupacao,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : null;
  }
};

const createEvent = async (
  nome,
  data,
  horaInicio,
  horaFim,
  localizacao,
  descricao,
  vagas
) => {
  try {
    const response = await axios.post(`${API_URL}/Event/create`, {
      nome,
      data,
      horaInicio,
      horaFim,
      localizacao,
      descricao,
      vagas,
    });
    console.log(response)

    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response ? error.response.data : null;
  }
};

const getEventos = async () => {
  try {
    const response = await axios.get(`${API_URL}/Event/eventos`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : null;
  }
};

export default {
  login,
  register,
  getEventos,
  createEvent,
};
