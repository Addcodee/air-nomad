import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import CountriesPage from "../Pages/CountriesPage/CountriesPage";
import TourDetails from "../Pages/TourDetails/TourDetails";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import HotToursPage from "../Pages/HotToursPage/HotToursPage";
import TestPage from "../Pages/TestPage/TestPage";

const AppRouter = () => {
  const routes = [
    { id: 1, element: <HomePage />, path: "/" },
    { id: 2, element: <CountriesPage />, path: "/countries/:id" },
    { id: 3, element: <TourDetails />, path: "/tour/:id" },
    { id: 4, element: <AboutUsPage />, path: "/about-us" },
    { id: 5, element: <HotToursPage />, path: "/hot-tours" },
    { id: 6, element: <TestPage />, path: "/test" },
    { id: 7, element: <NotFoundPage />, path: "*" },
  ];
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
