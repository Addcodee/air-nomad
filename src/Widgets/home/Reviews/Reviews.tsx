import ReviewCard from "../../../Entity/ReviewCard/ReviewCard";
import "./Reviews.scss";
import { reviews } from "./variables";

const Reviews = () => {
  return (
    <div className="reviews">
      <h3>Letzte Bewertungen über uns</h3>

      <div className="reviews__cards">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            date={review.date}
            img={review.img}
            text={review.text}
            stars={review.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
