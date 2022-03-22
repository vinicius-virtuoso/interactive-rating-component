import "./style.css";
import Star from "../../assets/images/icon-star.svg";
import Button from "../Button";
import { useState } from "react";
import Submitted from "../Submitted";

const rating = [1, 2, 3, 4, 5];

const Card = () => {
  const [rate, setRate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleClick({ target }) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");
    setRate(target.value);
  }
  function handleSubmit() {
    if (rate !== "" && rate !== null) {
      console.log(rate);
      setSubmitted(true);
    } else {
      alert("Please select a number!");
    }
  }

  return (
    <div className="card">
      {submitted ? (
        <Submitted rate={rate} />
      ) : (
        <>
          <div className="star">
            <img className="star-img" src={Star} alt="Star" />
          </div>
          <div className="box-text">
            <h2 className="card-title">How did we do?</h2>
            <p className="card-description">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="btn-group">
            {rating.map((btn, index) => (
              <Button value={btn} onClick={handleClick} key={index} />
            ))}
          </div>
          <button className="submit" type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </>
      )}
    </div>
  );
};
export default Card;
