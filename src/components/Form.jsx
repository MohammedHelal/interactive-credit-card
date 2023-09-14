import { useState } from "react";
import "./Form.css";
import PropTypes from "prop-types";

function Form({ formInputs, setFormInputs, setIsSubmitted }) {
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    numberError: "",
    monthError: "",
    yearError: "",
    cvcError: "",
  });

  function inputBlurHandler(event) {
    let id = event.target.id;
    let value;
    let val;

    switch (id) {
      case "card-name":
        setFormErrors((prevState) => ({
          ...prevState,
          nameError: event.target.value === "",
        }));
        break;
      case "card-number":
        value = event.target.value;
        val = value.replace(/\s/g, "");
        setFormErrors((prevState) => ({
          ...prevState,
          numberError: val === "" || !/^\d+$/.test(val),
        }));
        break;
      case "card-month":
        setFormErrors((prevState) => ({
          ...prevState,
          monthError:
            event.target.value === "" || !/^\d+$/.test(event.target.value),
        }));
        break;
      case "card-year":
        setFormErrors((prevState) => ({
          ...prevState,
          yearError:
            event.target.value === "" || !/^\d+$/.test(event.target.value),
        }));
        break;
      case "card-cvc":
        setFormErrors((prevState) => ({
          ...prevState,
          cvcError:
            event.target.value === "" || !/^\d+$/.test(event.target.value),
        }));
        break;
    }
  }

  function inputChangeHandler(event) {
    let id = event.target.id;
    let value = event.target.value;
    let val = value.replace(/\s/g, "");

    switch (id) {
      case "card-name":
        setFormErrors((prevState) => ({
          ...prevState,
          nameError: false,
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          name: event.target.value,
        }));
        break;
      case "card-number":
        setFormErrors((prevState) => ({
          ...prevState,
          numberError: false,
        }));
        if (val.length !== 16 && val.length % 4 == 0) {
          console.log(val.length);
          setFormInputs((prevState) => ({
            ...prevState,
            number: event.target.value + " ",
          }));
        } else {
          setFormInputs((prevState) => ({
            ...prevState,
            number: event.target.value,
          }));
        }
        break;
      case "card-month":
        setFormErrors((prevState) => ({
          ...prevState,
          monthError: false,
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          month: event.target.value,
        }));
        break;
      case "card-year":
        setFormErrors((prevState) => ({
          ...prevState,
          yearError: false,
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          year: event.target.value,
        }));
        break;
      case "card-cvc":
        setFormErrors((prevState) => ({
          ...prevState,
          cvcError: false,
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          cvc: event.target.value,
        }));
        break;
    }
  }

  function formSubmitHander(event) {
    event.preventDefault();
    //removing spaces from credit card number for error validation
    let val = formInputs.number.replace(/\s/g, "");

    //validating input errors
    let isNameError = formInputs.name === "";
    let isNumberError = val === "" || !/^\d+$/.test(val);
    let isMonthError =
      formInputs.month === "" || !/^\d+$/.test(formInputs.month);
    let isYearError = formInputs.year === "" || !/^\d+$/.test(formInputs.year);
    let isCvcError = formInputs.cvc === "" || !/^\d+$/.test(formInputs.cvc);

    if (
      isNameError ||
      isNumberError ||
      isMonthError ||
      isYearError ||
      isCvcError
    ) {
      setFormErrors((prevState) => ({
        ...prevState,
        nameError: isNameError,
        numberError: isNumberError,
        monthError: isMonthError,
        yearError: isYearError,
        cvcError: isCvcError,
      }));

      return;
    }

    setIsSubmitted(true);
  }

  return (
    <form onSubmit={formSubmitHander}>
      <div className="name">
        <label htmlFor="card-name">
          CARDHOLDER NAME
          <input
            id="card-name"
            className={formErrors.nameError ? "input-error" : ""}
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        </label>
        {formErrors.nameError && (
          <p style={{ color: "crimson", fontSize: "12px" }}>
            name should not be empty
          </p>
        )}
      </div>
      <div className="number">
        <label htmlFor="card-number">
          CARD NUMBER
          <input
            className={formErrors.numberError ? "input-error" : ""}
            id="card-number"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="19"
            value={formInputs.number}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
          {formErrors.numberError && (
            <p style={{ color: "crimson", fontSize: "12px" }}>
              Should only contain numbers
            </p>
          )}
        </label>
      </div>
      <div className="cvc-exp">
        <div className="cvc-exp-labels">
          <label htmlFor="card-month">Exp. Date (MM/YY)</label>
          <input
            id="card-month"
            className={formErrors.monthError ? "input-error" : ""}
            name="card-month-year"
            type="text"
            placeholder="MM"
            maxLength="2"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
          <input
            id="card-year"
            className={formErrors.yearError ? "input-error" : ""}
            name="card-month-year"
            type="text"
            placeholder="YY"
            maxLength="2"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
          {(formErrors.monthError || formErrors.yearError) && (
            <p style={{ color: "crimson", fontSize: "12px" }}>
              Please enter{" "}
              <span>
                {formErrors.monthError && formErrors.yearError
                  ? "month and year"
                  : formErrors.yearError
                  ? "year"
                  : "month"}
              </span>
            </p>
          )}
        </div>
        <div className="cvc-exp-inputs">
          <label htmlFor="card-cvc" className="cvc-label">
            CVC
          </label>
          <input
            id="card-cvc"
            className={formErrors.cvcError ? "input-error" : ""}
            type="text"
            placeholder="e.g. 123"
            maxLength="3"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
          {formErrors.cvcError && (
            <p style={{ color: "crimson", fontSize: "12px" }}>
              Please enter cvc
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
