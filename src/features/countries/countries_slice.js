import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
  "countries/loadContries",
   (_, { 
    extra: { client, api }
}) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null
    })
    .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error
    })
    .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
    })
  },
});

//selectors
export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  count: state.countries.list.length,
});

export const selectALLCountries = (state) => state.countries.list;
export const selectVisibleCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase().includes(region.toLowerCase())
  );
};

export const countryReducer = countrySlice.reducer;
