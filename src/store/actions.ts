import { Offer } from '../types/offer.type';
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('change_city');
export const fillOfferList = createAction<Offer[]>('fill_offers_list');
