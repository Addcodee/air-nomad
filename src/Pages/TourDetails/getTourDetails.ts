import { AppDispatch } from "../../App/rootStore";
import { ITour, tourdetailsSlice } from "./TourDetailsSlice";
import { DocumentSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "../../App/firebase";

export const getTourDetails = (id: string) => async (dispatch: AppDispatch) => {
  const tourDoc = doc(db, "tours", id);

  try {
    dispatch(tourdetailsSlice.actions.setIsLoading());
    const tourDocSnapshot: DocumentSnapshot = await getDoc(tourDoc); // Уточнение типа для tourDocSnapshot
    const data = tourDocSnapshot.data() as ITour;

    if (data) {
      dispatch(tourdetailsSlice.actions.setTour(data));
    } else {
      dispatch(tourdetailsSlice.actions.setError("Tour data not found"));
    }
  } catch (error: any) {
    dispatch(tourdetailsSlice.actions.setError(error.message));
  }
};
