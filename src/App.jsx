import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Form from "./components/Form/Form.jsx";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  //form inputs state to be displayed on the cards
  const [formInputs, setFormInputs] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  //State for the form submition to toggle between form and thank you components
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Cards formInputs={formInputs} />
      <section className="bg-right">
        {isSubmitted ? (
          <ThankYou
            setIsSubmitted={setIsSubmitted}
            setFormInputs={setFormInputs}
          />
        ) : (
          <Form
            formInputs={formInputs}
            setFormInputs={setFormInputs}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </section>
    </>
  );
}

export default App;
