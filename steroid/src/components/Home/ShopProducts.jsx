import { useState, useEffect } from 'react';
import ProductsList from './ProductsList'; // Adjust the import path if necessary

export const ShopProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchProducts = async () => {
      console.log("Starting fetch request...");
      try {
        const response = await fetch('https://progkitten.pythonanywhere.com/products');
        
        console.log("Response received:", response);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Data received:", data);
        setProducts(data['products']);
        
      } catch (error) {
        console.error('There was an error fetching the products:', error);
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <>
      <ProductsList products={products} titleLabel={'Products'} addToCart={addToCart} />
    </>
  );
};
