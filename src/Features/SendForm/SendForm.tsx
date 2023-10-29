import { useState } from "react";
import "./SendForm.scss";
import InputField from "../../Shared/UI/InputField/InputField";

const SendForm = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <form className="sendForm" action="">
      <InputField
        required={true}
        placeholder="Ihr Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <InputField
        required={true}
        placeholder="Ihre Nummer"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <InputField
        placeholder="Ihr e-Mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="agreement">
        <p>
          Durch Anklicken des Buttons erklären Sie sich mit der Verarbeitung
          Ihrer Daten einverstanden
        </p>
      </div>
      <button className="red-btn">Reise buchen</button>
    </form>
  );
};

export default SendForm;
