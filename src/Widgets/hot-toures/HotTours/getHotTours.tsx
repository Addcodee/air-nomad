import { db } from "../../../App/firebase";
import { AppDispatch } from "../../../App/rootStore";
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { ICard, hotToursSlice } from "./HotToursSlice";

const tourCollectionRef = collection(db, "tours");

export const getHotTours = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(hotToursSlice.actions.setIsLoading());
    const data: QuerySnapshot<DocumentData> = await getDocs(tourCollectionRef);
    const tours = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as ICard[];

    dispatch(hotToursSlice.actions.setToures(tours));
  } catch (error: any) {
    dispatch(hotToursSlice.actions.setError(error.message));
  }
};
