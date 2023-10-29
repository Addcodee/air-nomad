import "./WhyChooseUs.scss";
import { reasons } from "./variables";

const WhyChooseUs = () => {
  return (
    <div className="WCU">
      <h3>Warum wählen Touristen uns?</h3>
      <div className="WCU__reasons">
        {reasons.map((reason) => (
          <div key={reason.id} className="WCU__reasons_item">
            <div
              className={
                reason.color === "black"
                  ? "WCU__reasons_black"
                  : "WCU__reasons_white"
              }
            >
              <img src={reason.icon} alt="why-choose-us-icon" />
            </div>
            <div className="WCU__reasons_information">
              <h5>{reason.header}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="WCU__stats">
        <div className="WCU__stats_item">
          <h4>
            7<span>Jahren</span>
          </h4>
          <p>Erfolgreiche Arbeit</p>
        </div>
        <div className="WCU__stats_border"></div>
        <div className="WCU__stats_item">
          <h4>10000+</h4>
          <p>Zufriedene Kunden</p>
        </div>
        <div className="WCU__stats_border"></div>
        <div className="WCU__stats_item">
          <h4>8000+</h4>
          <p>Positives Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
