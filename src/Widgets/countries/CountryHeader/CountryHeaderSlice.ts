import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICountry {
  title: string;
  header: string;
  description: string;
  imgs: IImg[];
}

interface IImg {
  id: string;
  img: string;
}

interface IFetch {
  isLoading: boolean;
  data: ICountry;
  error: string;
}

const initialState: IFetch = {
  isLoading: false,
  data: {
    title: "",
    header: "",
    description: "",
    imgs: [],
  },
  error: "",
};

export const countryHeaderSlice = createSlice({
  name: "countryHeaderSlice",
  initialState,
  reducers: {
    setTour(state, action: PayloadAction<ICountry>) {
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

export default countryHeaderSlice.reducer;
