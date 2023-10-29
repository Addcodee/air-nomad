import Footer from "../Widgets/general/Footer/Footer";
import Navbar from "../Widgets/general/Navbar/Navbar";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
