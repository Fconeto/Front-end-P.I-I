import "../assets/styles/modal.css";

const Modal = () => {
  return (
    <div className="espaco">
      <section className="modal">
        <h3>Monitoria de Programação Orientada a Objetos</h3>
        <div>
          <h4>Apresentação</h4>
          <h5>
            Monitoria da disciplina de Programação Orientada a Objetos 2024.1
          </h5>
        </div>

        <div className="programacao">
          <h4>Programação</h4>
          <span>Data: 02/10/2024</span>
          <span>Horário: 13h:00 às 15h00</span>
          <span>Local: Sala 04</span>
        </div>
        <span>Vagas: 35</span>
      </section>
    </div>
  );
};

export default Modal;
