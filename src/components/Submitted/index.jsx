import "./style.css";
import Svg from "../../assets/images/illustration-thank-you.svg";

const Submitted = ({ rate }) => {
  return (
    <div className="box-thank-you">
      <img className="img-thank" src={Svg} alt="thank-you" />
      <span className="selected">You selected {rate} out of 5</span>
      <h2 className="title">Thank you!</h2>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Submitted;
