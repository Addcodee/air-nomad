import { useEffect } from "react";
import TourCard from "../../../Entity/TourCard/TourCard";
import "./CountryTours.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/redux-hooks";
import { getTours } from "./getTours";

const CountryToures = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.tourListReducer);

  useEffect(() => {
    dispatch(getTours());
  }, []);

  return (
    <div className="countryToures">
      <div className="countryToures__list">
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

export default CountryToures;
