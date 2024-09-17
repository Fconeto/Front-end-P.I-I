import "../assets/styles/card.css";

const Card = ({ source, setModalAtivo, nome, descricao, data, horario, local, vagas }) => {
  const abrir = () => {
    setModalAtivo(true);
  };

  return (
    <div className="card_evento">
      <section className="imagem">
        <img className="evento_img" src={source} />
      </section>

      <section className="info">
        <div className="nome_vaga">
          <h3>{nome}</h3>
          <span>Vagas: {vagas}</span>
        </div>
        <h4>{descricao}</h4>
        <div className="horario_mais">
          <div>
            <span>Data: {data}</span>
            <span>Horário: {horario}</span>
            <span>Local: {local}</span>
          </div>
          <button onClick={abrir}>Saiba mais</button>
        </div>
      </section>
    </div>
  );
};

export default Card;
