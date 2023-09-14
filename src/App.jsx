import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Form from "./components/Form.jsx";
import ThankYou from "./components/ThankYou";

function App() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

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
