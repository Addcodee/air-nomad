import "./Collage.scss";
import { collages } from "./variables";

const Collage = () => {
  return (
    <div className="collage">
      <h3>Beliebte Touren</h3>

      <div className="collage__imgs">
        {collages.map((collage) => (
          <div
            style={{ backgroundImage: `url(${collage.img})` }}
            key={collage.id}
            className="collage__imgs_item"
            id={collage.id}
          >
            <div className="collage__filter"></div>
            <h5>{collage.header}</h5>
            <p>{collage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
