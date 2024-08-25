import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSliceReducer from './features/cardsSlice';
import { starWarsApi } from './features/apiSlice';

const rootReducer = combineReducers({
  [starWarsApi.reducerPath]: starWarsApi.reducer,
  cards: cardsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
