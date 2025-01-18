import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Bounce, toast } from 'react-toastify';
import { fetchCampers, fetchSingleItem } from './campersOps';
import { selectFilters } from './filtersSlice';
import { compareStrings } from '../helpers/compare-strings';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  toast.error(action.payload, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  });
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
    loading: false,
    singleItem: null,
    itemsToShow: 5,
  },
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (id) => id !== action.payload
      );
    },
    resetCampersToShow(state) {
      state.itemsToShow = 5;
    },
    increaseCampersToShow(state) {
      state.itemsToShow += 5;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchSingleItem.pending, handlePending)
      .addCase(fetchSingleItem.fulfilled, (state, action) => {
        state.loading = false;
        state.singleItem = action.payload;
      })
      .addCase(fetchSingleItem.rejected, handleRejected);
  },
});

export const {
  addToFavorites,
  deleteFromFavorites,
  increaseCampersToShow,
  resetCampersToShow } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
export const selectCampers = (state) => state.campers.items;
export const selectFavorites = (state) => state.campers.favorites;
export const selectIsLoading = (state) => state.campers.loading;
export const selectSingleItem = (state) => state.campers.singleItem;
export const selectCampersToShow = (state) => state.campers.itemsToShow;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      for (const filterKey of Object.keys(filters)) {
        const filterValue = filters[filterKey];

        if (filterValue) {
          if (typeof camper[filterKey] === 'boolean') {
            if (camper[filterKey] !== filterValue) {
              return false;
            }
          }

          if (typeof camper[filterKey] === 'string' && filterValue.length) {
            if (!compareStrings(filterValue, camper[filterKey])) {
              return false;
            }
          }
        }
      }

      return true;
    });
  }
);
