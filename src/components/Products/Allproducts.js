import React, { useState } from 'react'; 
import Product from './Product';
import './allproduct.css';

export default function Allproducts({ data }) {
  const [sortingOption, setSortingOption] = useState(''); // Sıralama seçeneği için state


  // Seçilen seçeneğine göre sıralama 
  function sortProducts(a, b) {
    if (sortingOption === 'price-ascending') {
      return a.price - b.price;
    } else if (sortingOption === 'price-descending') {
      return b.price - a.price;
    } else if (sortingOption === 'ratings-ascending') {
      return a.rating.rate - b.rating.rate;
    } else if (sortingOption === 'ratings-descending') {
      return b.rating.rate - a.rating.rate;
    } else {
      return 0;
    }
  }

  // sıralama seçeneği ile olan değğişiklik
  function handleSortOptionChange(event) {
    setSortingOption(event.target.value);
  }

  const sortedData = [...data].sort(sortProducts); // verilerin bir kopyası oluşturulur kopya olmaması için

  return (
    <>
      <div className="container-fluid mt-4 m-auto">
        <div className='select' style={{ textAlign: 'center' }}>
          {/*  dropdown */}
          <select value={sortingOption} onChange={handleSortOptionChange}>
            <option value="">Sırala</option>
            <option value="price-ascending">Artan Fiyat</option>
            <option value="price-descending">Azalan Fiyat</option>
            <option value="ratings-ascending">Artan Puan</option>
            <option value="ratings-descending">Azalan Puan</option>
          </select>
        </div>
        <div className="card mt-4">
          {sortedData.map((product) => (
            <Product
              key={product.key}
              id={product.key}
              title={product.title}
              image={product.image}
              cost={product.price}
              description={product.description}
              rating={product.rating}
              category={product.category}
              type={'add'}
            />
          ))}
        </div>
      </div>
    </>
  );
}
