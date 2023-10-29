import "./TourDetails.scss";
import TourImages from "../../Widgets/tours/TourImages/TourImages";
import { IoLocationOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import TourInformation from "../../Widgets/tours/TourInformation/TourInformation";
import TourBooking from "../../Widgets/tours/TourBooking/TourBooking";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Shared/hooks/redux-hooks";
import { getTourDetails } from "./getTourDetails";

const TourDetails = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.tourDetailsReducer);
  const { id } = useParams();
  if (!id) return null;

  useEffect(() => {
    dispatch(getTourDetails(id));
  }, []);

  return (
    <div className="tourDetails">
      <div className="tourDetails__wrapper">
        <div className="tourDetails__wrapper_top">
          <div className="tourDetails__header">
            <div className="tourDetails__header_left">
              <h3>{data.title}</h3>
              <p>
                <IoLocationOutline />
                {data.location}, {data.country}
              </p>
            </div>
            <div className="tourDetails__header_right">
              <div>
                <FiShare />
                <p>Teilen</p>
              </div>
              <div>
                <AiOutlineHeart />
                <p>Speichern</p>
              </div>
            </div>
          </div>
          <TourImages imgs={data.imgs} />
        </div>

        <div className="tourDetails__information">
          <TourInformation
            title={data.title}
            description={data.description}
            guide={data.guide}
            guide_description={data.guide_description}
            hotel_infos={data.hotel_information}
          />
          <TourBooking
            max_price={data.max_price}
            min_price={data.min_price}
            arrival={data.arrival}
            departure={data.departure}
            nights={data.nights}
            room_type={data.room_type}
            lunch={data.lunch}
          />
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
