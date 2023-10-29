import { useEffect } from "react";
import TourCard from "../../../Entity/TourCard/TourCard";
import "./HotTours.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/redux-hooks";
import { getHotTours } from "./getHotTours";

const HoTours = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.tourListReducer);

  useEffect(() => {
    dispatch(getHotTours());
  }, []);

  return (
    <div className="hotTours">
      <div className="hotTours__list">
        {data.map((card) => (
          <TourCard
            id={card.id}
            title={card.title}
            location={card.location}
            country={card.country}
            price={card.min_price}
            type={card.type}
            key={card.id}
            img={card.imgs[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default HoTours;
