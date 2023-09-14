import { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";
import Input from "./Input.jsx";

function Form({ formInputs, setFormInputs, setIsSubmitted }) {
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    numberError: "",
    monthError: "",
    yearError: "",
    cvcError: "",
  });

  function formSubmitHander(event) {
    event.preventDefault();

    //error validation for untouched/empty inputs, other error validations is handled in the input blur handler in the input component
    if (
      formInputs.name === "" ||
      formInputs.number === "" ||
      formInputs.month === "" ||
      formInputs.year === "" ||
      formInputs.cvc === ""
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        nameError:
          prevState.nameError === "" && formInputs.name === ""
            ? "Name can't be blank"
            : "",
        numberError:
          prevState.numberError === "" && formInputs.number === ""
            ? "Number can't be blank"
            : "",
        monthError:
          prevState.monthError === "" && formInputs.month === ""
            ? "Month can't be blank"
            : "",
        yearError:
          prevState.yearError === "" && formInputs.year === ""
            ? "Year can't be blank"
            : "",
        cvcError:
          prevState.cvcError === "" && formInputs.cvc === ""
            ? "cvc can't be blank"
            : "",
      }));

      return;
    }

    setIsSubmitted(true);
  }

  return (
    <form onSubmit={formSubmitHander}>
      <div className="name-wrapper">
        <label htmlFor="name">
          CARDHOLDER NAME
          <Input
            setFormInputs={setFormInputs}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            id={"name"}
            placeholder={"e.g. Jane Appleseed"}
            value={formInputs.name}
            maxLength={""}
          />
        </label>
        {formErrors.nameError !== "" && (
          <p style={{ color: "crimson", fontSize: "12px" }}>
            {formErrors.nameError}
          </p>
        )}
      </div>
      <div className="number-wrapper">
        <label htmlFor="number">
          CARD NUMBER
          <Input
            setFormInputs={setFormInputs}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            id={"number"}
            value={formInputs.number}
            placeholder={"e.g. 1234 5678 9123 0000"}
            maxLength={"19"}
          />
        </label>
        {formErrors.numberError !== "" && (
          <p style={{ color: "crimson", fontSize: "12px" }}>
            {formErrors.numberError}
          </p>
        )}
      </div>
      <div className="cvc-exp-flex">
        <div className="month-year-wrapper">
          <label htmlFor="month" className="month-year-label">
            Exp. Date (MM/YY)
            <Input
              setFormInputs={setFormInputs}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              id={"month"}
              value={formInputs.month}
              placeholder={"MM"}
              maxLength={"2"}
            />
            <Input
              setFormInputs={setFormInputs}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              id={"year"}
              value={formInputs.year}
              placeholder={"YY"}
              maxLength={"2"}
            />
          </label>
          {(formErrors.monthError !== "" || formErrors.yearError !== "") && (
            <p style={{ color: "crimson", fontSize: "12px" }}>
              {formErrors.monthError !== "" && formErrors.yearError !== ""
                ? formErrors.monthError + ", " + formErrors.yearError
                : formErrors.yearError !== ""
                ? formErrors.yearError
                : formErrors.monthError}
            </p>
          )}
        </div>
        <div className="cvc-wrapper">
          <label htmlFor="cvc" className="cvc-label">
            CVC
            <Input
              setFormInputs={setFormInputs}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              id={"cvc"}
              value={formInputs.cvc}
              placeholder={"e.g. 123"}
              maxLength={"3"}
            />
          </label>
          {formErrors.cvcError !== "" && (
            <p style={{ color: "crimson", fontSize: "12px" }}>
              {formErrors.cvcError}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className="submit-button">
        Confirm
      </button>
    </form>
  );
}

Form.propTypes = {
  formInputs: PropTypes.object,
  setFormInputs: PropTypes.func,
  setIsSubmitted: PropTypes.func,
};

export default Form;
