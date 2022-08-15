import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from './config'
import { themeReducer } from "./features/theme/theme_slice";
import { controlsReducer } from "./features/controls/controls_slice";
import { countryReducer } from "./features/countries/countries_slice";
import { detailsReducer } from "./features/details/details_slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer 

  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
