import {combineReducers} from 'redux';

import { controlsReducer } from './controls/controls_reducer';
import { countriesReducer } from './countries/coutries_reducer';
import { detailsReducer } from './details/details_reducer';
import { themeReducer } from './theme/theme_reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer
});