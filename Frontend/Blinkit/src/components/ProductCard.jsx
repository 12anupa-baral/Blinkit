import React from 'react';
import AddToCart from '../assets/Icons/AddToCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageUrl, brand, name, price, originalPrice }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <Link to='/productdetail'>
        <img
          src={imageUrl}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        </Link>
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${originalPrice}
              </p>
            </del>
            <div className="ml-auto">
             <AddToCart/>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },

    {
      imageUrl:
        'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand',
      name: 'Product Name',
      price: 149,
      originalPrice: 199,
    },
  ];

  return (
    <div className="text-center p-10">
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 cursor-pointer"
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default ProductGrid;
