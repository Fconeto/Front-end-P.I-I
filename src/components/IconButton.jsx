import "../assets/styles/login.css";

const IconButton = ({className, source, texto }) => {
  return (
    <button className={className}>
          <img 
          src={source}
          alt="Background"/>
          <span>{texto}</span>
    </button>
  );
};

export default IconButton;
