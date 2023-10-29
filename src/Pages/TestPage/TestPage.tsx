import { useState } from "react";
import InputField from "../../Shared/UI/InputField/InputField";
import "./TestPage.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../App/firebase";
import { BiChevronDown } from "react-icons/bi";
import Select from "../../Shared/UI/Select/Select";

const TestPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [guide, setGuide] = useState<string>("");
  const [guideDescription, setGuideDescription] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [nights, setNights] = useState<string>("");
  const [roomType, setRoomType] = useState<string>("");
  const [lunch, setLunch] = useState<string>("");
  const [img1, setImg1] = useState<string>("");
  const [img2, setImg2] = useState<string>("");
  const [img3, setImg3] = useState<string>("");
  const [img4, setImg4] = useState<string>("");
  const [img5, setImg5] = useState<string>("");
  const [hotelTitle1, setHotelTitle1] = useState<string>("");
  const [hotelTitle2, setHotelTitle2] = useState<string>("");
  const [hotelTitle3, setHotelTitle3] = useState<string>("");
  const [hotelTitle4, setHotelTitle4] = useState<string>("");
  const [hotelTitle5, setHotelTitle5] = useState<string>("");
  const [hotelTitle6, setHotelTitle6] = useState<string>("");
  const [hotelTitle7, setHotelTitle7] = useState<string>("");
  const [hotelDescription1, setHotelDescription1] = useState<string>("");
  const [hotelDescription2, setHotelDescription2] = useState<string>("");
  const [hotelDescription3, setHotelDescription3] = useState<string>("");
  const [hotelDescription4, setHotelDescription4] = useState<string>("");
  const [hotelDescription5, setHotelDescription5] = useState<string>("");
  const [hotelDescription6, setHotelDescription6] = useState<string>("");
  const [hotelDescription7, setHotelDescription7] = useState<string>("");

  const createTour = async () => {
    try {
      const tourCollectionRef = collection(db, "tours");
      const newTour = {
        title,
        description,
        location,
        country,
        type,
        guide,
        guide_description: guideDescription,
        lunch,
        min_price: minPrice,
        max_price: maxPrice,
        arrival,
        departure,
        nights,
        room_type: roomType,
        imgs: [img1, img2, img3, img4, img5],
        hotel_information: [
          {
            id: Date.now() + 1,
            title: hotelTitle1,
            description: hotelDescription1,
          },
          {
            id: Date.now() + 2,
            title: hotelTitle2,
            description: hotelDescription2,
          },
          {
            id: Date.now() + 3,
            title: hotelTitle3,
            description: hotelDescription3,
          },
          {
            id: Date.now() + 4,
            title: hotelTitle4,
            description: hotelDescription4,
          },
          {
            id: Date.now() + 5,
            title: hotelTitle5,
            description: hotelDescription5,
          },
          {
            id: Date.now() + 6,
            title: hotelTitle6,
            description: hotelDescription6,
          },
          {
            id: Date.now() + 7,
            title: hotelTitle7,
            description: hotelDescription7,
          },
        ],
      };
      const response = await addDoc(tourCollectionRef, newTour);
      console.log(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="test">
      {/* <div className="test-wrapper">
        <InputField
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <InputField
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <InputField
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <InputField
          placeholder="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
        <InputField
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <InputField
          placeholder="guide"
          onChange={(e) => setGuide(e.target.value)}
          value={guide}
        />
        <InputField
          placeholder="guide description"
          onChange={(e) => setGuideDescription(e.target.value)}
          value={guideDescription}
        />
        <InputField
          placeholder="min price"
          onChange={(e) => setMinPrice(e.target.value)}
          value={minPrice}
        />
        <InputField
          placeholder="max price"
          onChange={(e) => setMaxPrice(e.target.value)}
          value={maxPrice}
        />
        <InputField
          placeholder="arrival"
          onChange={(e) => setArrival(e.target.value)}
          value={arrival}
        />
        <InputField
          placeholder="departure"
          onChange={(e) => setDeparture(e.target.value)}
          value={departure}
        />
        <InputField
          placeholder="nights"
          onChange={(e) => setNights(e.target.value)}
          value={nights}
        />
        <InputField
          placeholder="room type"
          onChange={(e) => setRoomType(e.target.value)}
          value={roomType}
        />
        <InputField
          placeholder="lunch"
          onChange={(e) => setLunch(e.target.value)}
          value={lunch}
        />
        <InputField
          placeholder="img1"
          onChange={(e) => setImg1(e.target.value)}
          value={img1}
        />
        <InputField
          placeholder="img2"
          onChange={(e) => setImg2(e.target.value)}
          value={img2}
        />
        <InputField
          placeholder="img3"
          onChange={(e) => setImg3(e.target.value)}
          value={img3}
        />
        <InputField
          placeholder="img4"
          onChange={(e) => setImg4(e.target.value)}
          value={img4}
        />
        <InputField
          placeholder="img5"
          onChange={(e) => setImg5(e.target.value)}
          value={img5}
        />
        <InputField
          placeholder="hotel title 1"
          onChange={(e) => setHotelTitle1(e.target.value)}
          value={hotelTitle1}
        />
        <InputField
          placeholder="hotel title 2"
          onChange={(e) => setHotelTitle2(e.target.value)}
          value={hotelTitle2}
        />
        <InputField
          placeholder="hotel title 3"
          onChange={(e) => setHotelTitle3(e.target.value)}
          value={hotelTitle3}
        />
        <InputField
          placeholder="hotel title 4"
          onChange={(e) => setHotelTitle4(e.target.value)}
          value={hotelTitle4}
        />
        <InputField
          placeholder="hotel title 5"
          onChange={(e) => setHotelTitle5(e.target.value)}
          value={hotelTitle5}
        />
        <InputField
          placeholder="hotel title 6"
          onChange={(e) => setHotelTitle6(e.target.value)}
          value={hotelTitle6}
        />
        <InputField
          placeholder="hotel title 7"
          onChange={(e) => setHotelTitle7(e.target.value)}
          value={hotelTitle7}
        />
        <InputField
          placeholder="hotel description 1"
          onChange={(e) => setHotelDescription1(e.target.value)}
          value={hotelDescription1}
        />
        <InputField
          placeholder="hotel description 2"
          onChange={(e) => setHotelDescription2(e.target.value)}
          value={hotelDescription2}
        />
        <InputField
          placeholder="hotel description 3"
          onChange={(e) => setHotelDescription3(e.target.value)}
          value={hotelDescription3}
        />
        <InputField
          placeholder="hotel description 4"
          onChange={(e) => setHotelDescription4(e.target.value)}
          value={hotelDescription4}
        />
        <InputField
          placeholder="hotel description 5"
          onChange={(e) => setHotelDescription5(e.target.value)}
          value={hotelDescription5}
        />
        <InputField
          placeholder="hotel description 6"
          onChange={(e) => setHotelDescription6(e.target.value)}
          value={hotelDescription6}
        />
        <InputField
          placeholder="hotel description 7"
          onChange={(e) => setHotelDescription7(e.target.value)}
          value={hotelDescription7}
        />
      </div>
      <button onClick={createTour} className="red-btn">
        Сохранить
      </button> */}
      <Select options={["1", "2"]} placeholder="nums" />
    </div>
  );
};

export default TestPage;
