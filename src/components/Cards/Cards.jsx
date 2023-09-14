import "./Cards.css";
import PropTypes from "prop-types";

function Cards({ formInputs }) {
  return (
    <aside className="bg-left">
      {/*Front facing card section*/}
      <div className="front-card">
        <img src="./images/card-logo.svg" alt="card-logo" />
        <div>
          <div className="credit-card-number">
            <p>
              {formInputs.number === ""
                ? "0000 0000 0000 0000"
                : formInputs.number}
            </p>
          </div>
          <div className="name-date-wrapper">
            <p>{formInputs.name === "" ? "Jane Appleseed" : formInputs.name}</p>
            <p>
              {formInputs.month === "" ? "00" : formInputs.month}/
              {formInputs.year === "" ? "00" : formInputs.year}
            </p>
          </div>
        </div>
      </div>
      {/*Back facing card section*/}
      <div className="back-card">
        <p>{formInputs.cvc === "" ? "000" : formInputs.cvc}</p>
      </div>
    </aside>
  );
}

Cards.propTypes = {
  formInputs: PropTypes.object,
};

export default Cards;
