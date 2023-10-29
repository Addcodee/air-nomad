import AboutUsDescription from "../../Widgets/about-us/AboutUsDescription/AboutUsDescription";
import AboutUsGoals from "../../Widgets/about-us/AboutUsGoals/AboutUsGoals";
import AboutUsHeader from "../../Widgets/about-us/AboutUsHeader/AboutUsHeader";
import AboutUsStory from "../../Widgets/about-us/AboutUsStory/AboutUsStory";
import AboutUsValues from "../../Widgets/about-us/AboutUsValues/AboutUsValues";
import "./AboutUsPage.scss";

const AboutUsPage = () => {
  return (
    <div className="aboutUs">
      <AboutUsHeader />
      <div className="aboutUs__wrapper">
        <AboutUsDescription />
        <AboutUsStory />
        <AboutUsValues />
        <AboutUsGoals />
      </div>
    </div>
  );
};

export default AboutUsPage;
