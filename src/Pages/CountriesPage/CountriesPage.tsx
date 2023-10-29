import CountryHeader from "../../Widgets/countries/CountryHeader/CountryHeader";
import CountryToures from "../../Widgets/countries/CountryTours/CountryTours";
import "./CountriesPage.scss";

const CountriesPage = () => {
  return (
    <div className="countriesPage">
      <CountryHeader />
      <CountryToures />
    </div>
  );
};

export default CountriesPage;
