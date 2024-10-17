import "./Button.css";

const Button = ({ text, onClick, variant = "default", type = "button" }) => {
  return (
    <button
      className={`button button-${variant}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
