import "../assets/styles/home.css"

const IconButton = ({className, source, texto, act }) => {

  return (
    <button className={className}>
          <img 
          className="img_button"
          src={source}
          alt="Background"/>
          <span>{texto}</span>
    </button>
  );
};

export default IconButton;



