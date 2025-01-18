import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/campers');
    return data.items.map(item => {
      const [ country, city ] = item.location.split(', ');
      item.img = item.gallery[0].thumb;
      item.reviewsCount = item.reviews.length;
      item.location = `${city}, ${country}`;
      item.alcove = item.form === 'alcove';
      item.van = item.form === 'panelTruck';
      item.fullyIntegrated = item.form === 'fullyIntegrated';
      item.automatic = item.transmission === 'automatic';

      return item;
    });
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchSingleItem = createAsyncThunk('campers/fetchSingleItem', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    const [ country, city ] = data.location.split(', ');

    data.reviewsCount = data.reviews.length;
    data.img = data.gallery[0].thumb;
    data.location = `${city}, ${country}`;
    data.form = (data.form === 'fullyIntegrated' && 'Fully integrated') ||
      (data.form === 'panelTruck' && 'Van') ||
      data.form;
    
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
