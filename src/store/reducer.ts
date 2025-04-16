import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/initialState.type';
import { changeCity, fillOfferList } from './actions';

const initialState: InitialState = {
  cityName: 'Paris',
  offerList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerList = action.payload;
    });
});

export default reducer;
