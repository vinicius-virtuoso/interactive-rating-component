import "./style.css";

const Button = ({ value, onClick }) => {
  return (
    <button className="btn" value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
