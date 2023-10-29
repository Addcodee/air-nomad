import "./ReviewCard.scss";
import { FaStar, FaRegStar } from "react-icons/fa";

interface IReviewProps {
  name: string;
  date: string;
  img: string;
  text: string;
  stars: number;
}

const ReviewCard: React.FC<IReviewProps> = ({
  name,
  date,
  img,
  text,
  stars,
}: IReviewProps) => {
  const showStars = () => {
    const starList = [];
    const total = 5;

    for (let i = 0; i < total; i++) {
      if (i < stars) {
        starList.push(<FaStar key={`star${i}`} />);
      } else {
        starList.push(<FaRegStar key={`outline${i}`} />);
      }
    }

    return starList;
  };
  return (
    <div className="review">
      <div className="review__header">
        <img src={img} alt="review-user-img" />
        <div className="review__header_information">
          <h5>{name}</h5>
          <p>{date}</p>
        </div>
      </div>
      <ul className="review__stars">
        {showStars().map((star) => (
          <li key={star.key}>{star}</li>
        ))}
      </ul>
      <p className="review__text">„{text}“</p>
    </div>
  );
};

export default ReviewCard;
