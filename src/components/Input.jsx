//import React from 'react'
import PropTypes from "prop-types";

function Input({ setFormInputs, formErrors, setFormErrors }) {
  function inputBlurHandler(event) {
    let id = event.target.id;
    let value = event.target.value;
    let val;

    switch (id) {
      case "card-name":
        setFormErrors((prevState) => ({
          ...prevState,
          nameError: value === "" ? "Name cannot be empty" : "",
        }));
        break;
      case "card-number":
        val = value.replace(/\s/g, "");
        setFormErrors((prevState) => ({
          ...prevState,
          numberError:
            val === ""
              ? "Card number cannot be empty"
              : !/^\d+$/.test(val)
              ? "Card number must consist of only numbers"
              : "",
        }));
        break;
      case "card-month":
        setFormErrors((prevState) => ({
          ...prevState,
          monthError:
            value === ""
              ? "Month cannot be empty"
              : !/^\d+$/.test(value)
              ? "Month has to be only numbers"
              : value > 12
              ? "There is only 12 months in a year"
              : "",
        }));
        break;
      case "card-year":
        setFormErrors((prevState) => ({
          ...prevState,
          yearError:
            value === ""
              ? "Year cannot be empty"
              : !/^\d+$/.test(value)
              ? "Year has to be only numbers"
              : "",
        }));
        break;
      case "card-cvc":
        setFormErrors((prevState) => ({
          ...prevState,
          cvcError:
            value === ""
              ? "cvc cannot be empty"
              : !/^\d+$/.test(value)
              ? "cvc has to be only numbers"
              : "",
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

  return (
    <input
      id="card-name"
      className={formErrors.nameError ? "input-error" : ""}
      type="text"
      placeholder="e.g. Jane Appleseed"
      onChange={inputChangeHandler}
      onBlur={inputBlurHandler}
    />
  );
}

Input.propTypes = {
  formInputs: PropTypes.object,
  setFormInputs: PropTypes.func,
  formErrors: PropTypes.object,
  setFormErrors: PropTypes.func,
};

export default Input;
