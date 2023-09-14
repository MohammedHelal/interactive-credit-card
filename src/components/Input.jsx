//import React from 'react'
import PropTypes from "prop-types";

function Input({ formInputs, setFormInputs, formErrors, setFormErrors }) {
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
