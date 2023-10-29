import "./TourCard.scss";
import { IoLocationOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import flame from "./assets/flame-icon.svg";
import { useNavigate } from "react-router";

interface ITourCardProps {
  img: string;
  title: string;
  location: string;
  country: string;
  price: string;
  type: string;
  id: string;
}

const TourCard: React.FC<ITourCardProps> = ({
  img,
  title,
  location,
  country,
  price,
  type,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="tourCard">
      <div className="tourCard__img">
        <img
          onClick={() => navigate(`/tour/${id}`)}
          id="tourCard-img"
          src={img}
          alt="tour-img"
        />
        <div className="tourCard__fav">
          {type === "hot" ? <img src={flame} alt="flame-icon" /> : null}
          <MdFavorite id="tourCard-fav" />
        </div>
      </div>

      <div className="tourCard__information">
        <div className="tourCard__information_left">
          <h5>{title.length > 15 ? `${title.slice(0, 20)}...` : title}</h5>
          <div id="tourCard-description">
            <IoLocationOutline />
            <p>
              {location}, {country}
            </p>
          </div>
        </div>
        <h5 id="tourCard-price">{price}$</h5>
      </div>
      {/* <button className="red-btn-outline">Alle Details</button> */}
    </div>
  );
};

export default TourCard;
