// client/src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import socket from '../socket';
import '../style.css';

const ProductList = ({ products }) => {
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const updateDataHandler = (updatedProducts) => {
      console.log('Received updateData event with:', updatedProducts);
      // Use the functional form of setProductList to correctly update based on the previous state
      setProductList(prevProducts => {
        // Log the previous state for verification
        console.log('Previous Product List:', prevProducts);
        // Return the updated state
        return updatedProducts;
      });
    };

    socket.on('updateData', updateDataHandler);

    // Clean up the event listener on component unmount
    return () => {
      socket.off('updateData', updateDataHandler);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container">
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
