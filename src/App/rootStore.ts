import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tourListReducer from "../Widgets/countries/CountryTours/CountryToursSlice";
import tourDetailsReducer from "../Pages/TourDetails/TourDetailsSlice";
import countryHeaderReducer from "../Widgets/countries/CountryHeader/CountryHeaderSlice";
import hotToursReducer from "../Widgets/hot-toures/HotTours/HotToursSlice";

export const rootReducers = combineReducers({
  tourListReducer,
  tourDetailsReducer,
  countryHeaderReducer,
  hotToursReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
