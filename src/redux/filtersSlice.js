import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    values: {
      AC: false,
      alcove: false,
      automatic: false,
      bathroom: false,
      form: '',
      fullyIntegrated: false,
      kitchen: false,
      location: '',
      TV: false,
      van: false,
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.values = action.payload;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state) => state.filters.values;
