'use client';
import { useEffect, useState } from 'react';
export default function Page() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let data = await fetch('https://dummyjson.com/products');
      data = await data.json();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List:</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>
            Product Name: {item.title}, Price: ${item.price}
          </h2>
        </div>
      ))}
    </div>
  );
}
