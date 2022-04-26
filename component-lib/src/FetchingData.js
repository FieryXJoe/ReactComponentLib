import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
const FetchingData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts/');
        setProducts(response.data);
      } catch (error) {
        console.log('An error ocurred:', error);
      }
    };
    getData();
  }, []);
  return (
    <>
      {products.length ? (
        products.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.body}</p>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
};
export default FetchingData;