import { useEffect, useState } from "react";
import "./CountryHeader.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/redux-hooks";
import { getCountry } from "./getCountry";
import { useParams } from "react-router";

const CountryHeader = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.countryHeaderReducer);

  const { id } = useParams();
  if (!id) return null;

  const slides = [
    {
      id: 1,
      img: "https://kilimanjaro.b-cdn.net/wp-content/uploads/tallest-mountains-in-japan.jpeg",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2187603/pexels-photo-2187603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4026905/pexels-photo-4026905.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  const nextslide = () => {
    if (imageIndex === slides.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex(imageIndex + 1);
  };

  const previousSlide = () => {
    if (imageIndex === 0) {
      setImageIndex(slides.length - 1);
      return;
    }
    setImageIndex(imageIndex - 1);
  };

  useEffect(() => {
    dispatch(getCountry(id));
    console.log(id);
  }, [id]);

  return (
    <div className="countryHeader">
      <div className="countryHeader__imgs">
        {data.imgs.map((slide) => (
          <div
            style={{ translate: `${-100 * imageIndex}%` }}
            key={slide.id}
            className="countryHeader__imgs_item"
          >
            <img src={slide.img} alt="country-imgs" />
          </div>
        ))}

        <div className="countryHeader__arrows" id="arrow-left">
          <BsChevronCompactLeft
            onClick={previousSlide}
            className="countryHeader__arrows_item"
          />
        </div>
        <div className="countryHeader__arrows" id="arrow-right">
          <BsChevronCompactRight
            onClick={nextslide}
            className="countryHeader__arrows_item"
          />
        </div>

        <div className="countryHeader__dots">
          {data.imgs.map((dot, index) => (
            <div
              className={
                index === imageIndex
                  ? "countryHeader__dots_item-active"
                  : "countryHeader__dots_item"
              }
              onClick={() => setImageIndex(index)}
              key={dot.id}
            ></div>
          ))}
        </div>
      </div>
      <div className="countryHeader__filter"></div>
      <div className="countryHeader__information">
        <div className="countryHeader__information_top">
          <h2>{data.header}</h2>
          <p>{data.description}</p>
        </div>

        <button className="red-btn">Mehr erfahren</button>
      </div>
    </div>
  );
};

export default CountryHeader;
