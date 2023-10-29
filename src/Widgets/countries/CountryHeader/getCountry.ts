import { db } from "../../../App/firebase";
import { AppDispatch } from "../../../App/rootStore";
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import { ICountry, countryHeaderSlice } from "./CountryHeaderSlice";

export const getCountry = (id: string) => async (dispatch: AppDispatch) => {
  const tourDoc = doc(db, "countries", id);

  try {
    dispatch(countryHeaderSlice.actions.setIsLoading());
    const tourDocSnapshot: DocumentSnapshot = await getDoc(tourDoc); // Уточнение типа для tourDocSnapshot
    const data = tourDocSnapshot.data() as ICountry;

    if (data) {
      dispatch(countryHeaderSlice.actions.setTour(data));
    } else {
      dispatch(countryHeaderSlice.actions.setError("Tour data not found"));
    }
  } catch (error: any) {
    dispatch(countryHeaderSlice.actions.setError(error.message));
  }
};
