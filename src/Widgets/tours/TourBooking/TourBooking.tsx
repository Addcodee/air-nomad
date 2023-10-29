import SendForm from "../../../Features/SendForm/SendForm";
import "./TourBooking.scss";

interface ITourBookingProps {
  min_price: string;
  max_price: string;
  arrival: string;
  departure: string;
  nights: string;
  room_type: string;
  lunch: string;
}

const TourBooking: React.FC<ITourBookingProps> = ({
  max_price,
  min_price,
  arrival,
  departure,
  nights,
  room_type,
  lunch,
}) => {
  return (
    <div className="tourBooking">
      <h4>
        {min_price}€ - {max_price}€
      </h4>
      <p id="price-description">Im Reisepreis inbegriffen</p>
      <div className="tourBooking__things">
        <div id="tourBooking-arrival">
          <h5>Ankunft</h5>
          <p>{arrival}</p>
        </div>
        <div id="tourBooking-departure">
          <h5>Abfahrt</h5>
          <p>{departure}</p>
        </div>
        <div className="tourBooking__things_item">
          <h5>Hotelunterkunft</h5>
          <p>{nights}</p>
        </div>
        <div className="tourBooking__things_item">
          <h5>Art der Nummer</h5>
          <p>{room_type}</p>
        </div>
        <div className="tourBooking__things_item">
          <h5>Mahlzeiten</h5>
          <p>{lunch}</p>
        </div>
      </div>
      <p id="booking-form">
        Hinterlassen Sie eine Anfrage für eine ausführliche Beratung zu dieser
        Tour
      </p>
      <SendForm />
    </div>
  );
};

export default TourBooking;
