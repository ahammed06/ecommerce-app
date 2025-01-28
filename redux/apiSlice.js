// redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // Name of the reducer for this slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/', // The base URL for the API
  }),
  endpoints: (builder) => ({
    // Define the API endpoints
    getProducts: builder.query({
      query: () => 'products', // Endpoint to get all products
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`, // Get product details by ID
    }),
    getCategories: builder.query({
      query: () => 'products/categories', // Get all product categories
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`, // Get products by category
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = apiSlice;
