'use client';  // Mark as client-side component

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';  // Import useEffect from React
import { useGetProductsQuery } from '../redux/apiSlice';  // Import the hook from apiSlice
import { apiSlice } from '../redux/apiSlice';  // Import the apiSlice for initiating queries manually

export default function HomePage() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery();  // Fetch products using the RTK query hook

  // Prefetch products on component mount
  useEffect(() => {
    dispatch(apiSlice.endpoints.getProducts.initiate());  // Manually trigger the API call (optional)
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data?.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
