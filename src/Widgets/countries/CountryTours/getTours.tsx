import { db } from "../../../App/firebase";
import { AppDispatch } from "../../../App/rootStore";
import { ICard, countryToursSlice } from "./CountryToursSlice";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

const tourCollectionRef = collection(db, "tours");

export const getTours = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(countryToursSlice.actions.setIsLoading());
    const data: QuerySnapshot<DocumentData> = await getDocs(tourCollectionRef);
    const tours = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as ICard[];

    dispatch(countryToursSlice.actions.setToures(tours));
  } catch (error: any) {
    dispatch(countryToursSlice.actions.setError(error.message));
  }
};
