import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  selectData: Data | Record<string, never>;
}

interface Data {
  country: string;
  city: string;
  univercity: string;
  accommodation: string;
}

const initialState: InitialState = {
  selectData: {},
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    addCountry(state, { payload }) {
      if (state.selectData.city) {
        state.selectData = {};
      }
      if(state.selectData.country === payload){
        return
      }
      state.selectData.country = payload;
    },
    addCity(state, { payload }) {
      state.selectData.accommodation = '';
      state.selectData.univercity = '';
      state.selectData.city = payload;
    },
    addUnivercity(state, { payload }) {
      state.selectData.accommodation = '';
      state.selectData.univercity = payload;
    },
    addAccommodation(state, { payload }) {
      state.selectData.accommodation = payload;
    },
  },
});

export const { addCountry, addCity, addUnivercity, addAccommodation } =
  dataSlice.actions;
export default dataSlice.reducer;
