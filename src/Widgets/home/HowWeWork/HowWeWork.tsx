import "./HowWeWork.scss";
import { methods } from "./variables";

const HowWeWork = () => {
  return (
    <div className="howWeWork">
      <h3>Wie wir arbeiten</h3>

      <div className="howWeWork__methods">
        {methods.map((method) => (
          <div key={method.id} className="howWeWork__methods_item">
            <div className="howWeWork__icon">
              <img src={method.icon} alt="work-method-icon" />
            </div>
            <h5>{method.header}</h5>
            <p>{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
