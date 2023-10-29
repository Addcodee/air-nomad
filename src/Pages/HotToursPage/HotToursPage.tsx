import HotTours from "../../Widgets/hot-toures/HotTours/HotTours";
import HotToursHeader from "../../Widgets/hot-toures/HotToursHeader/HotToursHeader";
import "./HotToursPage.scss";

const HotToursPage = () => {
  return (
    <div className="hotToursPage">
      <HotToursHeader />
      <HotTours />
    </div>
  );
};

export default HotToursPage;
