import SendForm from "../../../Features/SendForm/SendForm";
import "./Form.scss";

const Form = () => {
  const background =
    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="form">
      <div className="form__wrapper">
        <div className="form__information">
          <h3>Beeilen Sie sich und buchen Sie eine Last-Minute-Tour</h3>
          <p>
            Hinterlassen Sie eine Anfrage für eine Last-Minute-Tour und erhalten
            Sie eine aktuelle Liste der Last-Minute-Touren
          </p>
        </div>
        <SendForm />
      </div>
    </div>
  );
};

export default Form;
