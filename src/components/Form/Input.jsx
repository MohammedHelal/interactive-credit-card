//import React from 'react'
import PropTypes from "prop-types";

function Input({
  setFormInputs,
  formErrors,
  setFormErrors,
  id,
  placeholder,
  maxLength,
  value,
}) {
  function inputBlurHandler(event) {
    let id = event.target.id;
    let value = event.target.value;
    let val;

    //switch case for error validation based on the id of the input
    switch (id) {
      case "name":
        setFormErrors((prevState) => ({
          ...prevState,
          nameError: value === "" ? "Name can't be blank" : "",
        }));
        break;
      case "number":
        //variable stores card number withouyt the spaces put in the card number every 4 charecters
        val = value.replace(/\s/g, "");
        console.log(val);
        setFormErrors((prevState) => ({
          ...prevState,
          numberError:
            val === ""
              ? "Card number can't be blank"
              : !/^\d+$/.test(val)
              ? "Card number must consist of only numbers"
              : val.length < 16
              ? "Card number must be 16 numbers"
              : "",
        }));
        break;
      case "month":
        setFormErrors((prevState) => ({
          ...prevState,
          monthError:
            value === ""
              ? "Month can't be blank"
              : !/^\d+$/.test(value)
              ? "Month has to be only numbers"
              : value > 12
              ? "There is only 12 months in a year"
              : "",
        }));
        break;
      case "year":
        setFormErrors((prevState) => ({
          ...prevState,
          yearError:
            value === ""
              ? "Year can't be blank"
              : !/^\d+$/.test(value)
              ? "Year has to be only numbers"
              : "",
        }));
        break;
      case "cvc":
        setFormErrors((prevState) => ({
          ...prevState,
          cvcError:
            value === ""
              ? "cvc can't be blank"
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
    //variable stores card number withouyt the spaces put in the card number every 4 charecters
    let val = value.replace(/\s/g, "");

    //switch case for the input state change based on id
    //the error for the input is reset when a user enters a key
    switch (id) {
      case "name":
        setFormErrors((prevState) => ({
          ...prevState,
          nameError: "",
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          name: event.target.value,
        }));
        break;
      case "number":
        setFormErrors((prevState) => ({
          ...prevState,
          numberError: "",
        }));
        //if statement to insert space after every 4th number
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
      case "month":
        setFormErrors((prevState) => ({
          ...prevState,
          monthError: "",
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          month: event.target.value,
        }));
        break;
      case "year":
        setFormErrors((prevState) => ({
          ...prevState,
          yearError: "",
        }));
        setFormInputs((prevState) => ({
          ...prevState,
          year: event.target.value,
        }));
        break;
      case "cvc":
        setFormErrors((prevState) => ({
          ...prevState,
          cvcError: "",
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
      id={id}
      className={formErrors[`${id}Error`] ? "input-error" : ""}
      type="text"
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
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
  id: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
