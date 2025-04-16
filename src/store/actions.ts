import { OfferPreview } from '../types/preview.type';
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string>('CHANGE_CITY');
export const fillOfferList = createAction<OfferPreview[]>('FILL_OFFER-LIST');
