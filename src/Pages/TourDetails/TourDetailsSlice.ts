import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITour {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  country: string;
  guide: string;
  guide_description: string;
  imgs: string[];
  hotel_information: IHotel[];
  min_price: string;
  max_price: string;
  departure: string;
  arrival: string;
  lunch: string;
  nights: string;
  room_type: string;
}

interface IHotel {
  id: number;
  title: string;
  description: string;
}

interface IFetch {
  isLoading: boolean;
  data: ITour;
  error: string;
}

const initialState: IFetch = {
  isLoading: false,
  data: {
    id: "",
    title: "",
    description: "",
    location: "",
    type: "",
    country: "",
    guide: "",
    guide_description: "",
    imgs: [],
    hotel_information: [],
    min_price: "",
    max_price: "",
    departure: "",
    arrival: "",
    lunch: "",
    nights: "",
    room_type: "",
  },
  error: "",
};

export const tourdetailsSlice = createSlice({
  name: "tourdetailsSlice",
  initialState,
  reducers: {
    setTour(state, action: PayloadAction<ITour>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default tourdetailsSlice.reducer;
