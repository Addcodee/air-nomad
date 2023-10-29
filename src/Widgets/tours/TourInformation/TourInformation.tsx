import "./TourInformation.scss";

interface ITourInfoProps {
  hotel_infos: IHotel[];
  title: string;
  description: string;
  guide: string;
  guide_description: string;
}

interface IHotel {
  id: number;
  title: string;
  description: string;
}

const TourInformation: React.FC<ITourInfoProps> = ({
  hotel_infos,
  title,
  description,
  guide,
  guide_description,
}) => {
  function TextWithParagraphsAndSpans(description: string) {
    if (!description) {
      return null;
    }

    description = description.replace(/\\n/g, "\n").replace(/\\\*/g, "*");

    const regex = /\*(.*?)\*/g;
    const paragraphs = description.split("\n");

    const elements = paragraphs.map((paragraph, pIndex) => {
      const parts = paragraph.split(regex);
      const paragraphElements = parts.map((part, index) => {
        if (part === "") return null;
        if (index % 2 === 1) {
          return <span key={index}>{part}</span>;
        } else {
          return part;
        }
      });

      return <p key={pIndex}>{paragraphElements}</p>;
    });

    return <div className="tourInformation__punkt-description">{elements}</div>;
  }

  return (
    <div className="tourInformation">
      <div className="tourInformation__aboutTour">
        <h4>Über die Tour</h4>
        <div className="tourInformation__punkt">
          <h5>{title}</h5>
          {TextWithParagraphsAndSpans(description)}
        </div>
      </div>
      <div className="tourInformation__aboutHotel">
        <h4>Über das Hotel</h4>
        {hotel_infos.map((tour) => (
          <div key={tour.id} className="tourInformation__punkt">
            <h5>{tour.title}</h5>
            {TextWithParagraphsAndSpans(tour.description)}
          </div>
        ))}
      </div>
      <div className="tourInformation__guide">
        <h4>Reiseführer</h4>
        <div className="tourInformation__punkt">
          <h5>{guide}</h5>
          {TextWithParagraphsAndSpans(guide_description)}
        </div>
      </div>
    </div>
  );
};

export default TourInformation;
