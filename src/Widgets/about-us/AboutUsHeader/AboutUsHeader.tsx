import "./AboutUsHeader.scss";

const AboutUsHeader = () => {
  let background;
  background =
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <>
      <div
        className="aboutUsHeader"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h2>Air Nomad</h2>
        <p>
          Reisen Sie mit dem Wind in Ihren Haaren! Air Nomad - der Weg zu
          endlosen Abenteuern und unglaublichen Momenten weltweit.
        </p>
      </div>
      <div className="aboutUsFilter"></div>
    </>
  );
};

export default AboutUsHeader;
