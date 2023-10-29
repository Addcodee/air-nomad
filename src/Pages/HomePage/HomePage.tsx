import Form from "../../Widgets/general/Form/Form";
import Collage from "../../Widgets/home/Collage/Collage";
import Header from "../../Widgets/home/Header/Header";
import HowWeWork from "../../Widgets/home/HowWeWork/HowWeWork";
import Reviews from "../../Widgets/home/Reviews/Reviews";
import WhyChooseUs from "../../Widgets/home/WhyChooseUs/WhyChooseUs";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Collage />
      <HowWeWork />
      <Form />
      <WhyChooseUs />
      <Reviews />
    </div>
  );
};

export default HomePage;
