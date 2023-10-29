import "./TourImages.scss";

interface ITourImages {
  imgs: string[];
}

const TourImages: React.FC<ITourImages> = ({ imgs }) => {
  return (
    <div className="tourImages">
      {imgs.map((img, index) => (
        <img id={`tourImg${index + 1}`} key={img} src={img} alt="tour-image" />
      ))}
    </div>
  );
};

export default TourImages;
