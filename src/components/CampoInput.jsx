import "../assets/styles/login.css";

const CampoInput = ({ className, name, type, placeholder, source }) => {
  return (
    <div className={className}>
      <input name={name} type={type} placeholder={placeholder} required />

      <div>
        <img
          className="icon"
          src={source}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default CampoInput;
