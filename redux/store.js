// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; // Import the apiSlice we just created

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add api slice reducer to store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});

export default store;
