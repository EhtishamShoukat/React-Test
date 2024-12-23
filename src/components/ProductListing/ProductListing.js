import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductListing = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(response => {
      const grouped = response.data.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
      }, {});
      setProducts(grouped);
    });
  }, []);

  return (
    <div>
      {Object.keys(products).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="row">
            {products[category].map(product => (
              <div className="col-4" key={product.id}>
                <div className="card">
                  <img src={product.image} alt={product.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
