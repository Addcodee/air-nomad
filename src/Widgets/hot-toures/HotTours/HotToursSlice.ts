import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICard {
  id: string;
  title: string;
  location: string;
  country: string;
  type: string;
  min_price: string;
}

interface IFetch {
  isLoading: boolean;
  data: ICard[];
  error: string;
}

const initialState: IFetch = {
  isLoading: false,
  data: [],
  error: "",
};

export const hotToursSlice = createSlice({
  name: "hotToursSlice",
  initialState,
  reducers: {
    setToures(state, action: PayloadAction<ICard[]>) {
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

export default hotToursSlice.reducer;
