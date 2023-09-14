import "./Form.css";
import PropTypes from "prop-types";

function ThankYou({ setIsSubmitted, setFormInputs }) {
  function clickHandler() {
    setFormInputs((prevState) => ({
      ...prevState,
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    }));

    setIsSubmitted(false);
  }
  return (
    <div className="thank-you">
      <img src="./images/icon-complete.svg" alt="complete tick" />
      <h1>THANK YOU!</h1>
      <p className="added-para">We&apos;ve added your card details</p>
      <button className="submit-button" onClick={clickHandler}>
        Continue
      </button>
    </div>
  );
}

ThankYou.propTypes = {
  setIsSubmitted: PropTypes.func,
  setFormInputs: PropTypes.func,
};

export default ThankYou;
