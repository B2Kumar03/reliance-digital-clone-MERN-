import React, { useEffect, useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTruck, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart=useSelector((state)=>state.signIn.cart)

  const navigate = useNavigate();

  

  return (
    <div className="p-6 max-w-4xl mx-auto my-20 bg-white shadow-md space-y-4">
      {cart.length === 0 ? (
        <div className="text-center">
          <img 
            src="https://www.reliancedigital.in/build/client/images/emptycart.png" 
            alt="Empty Cart" 
            className="mx-auto mb-4 w-48 h-48"
          />
          <p className="text-gray-700 mb-4">Your Shopping Cart is Empty</p>
          <button 
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-700"
            onClick={() => navigate('/')}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center border-b pb-4 mb-4">
                <img 
                  className="h-24 w-24 object-cover rounded mr-4" 
                  src={item.img} 
                  alt={item.name} 
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-gray-900 font-bold text-xl mt-2">₹{item.price}</p>
                  <p className="text-green-500 mt-1">Free Shipping</p>
                  <div className="flex items-center mt-2">
                    <FaTruck className="text-blue-500 mr-2" />
                    <p className="text-gray-700">Standard Delivery: 09 Aug (Fri) - 10 Aug (Sat)</p>
                  </div>
                  <div className="mt-2">
                    <label htmlFor={`quantity-${index}`} className="mr-2">Qty:</label>
                    <select id={`quantity-${index}`} className="border rounded px-2 py-1">
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>{qty}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <button className="text-red-500">Remove</button>
          </div>
          <div className="md:w-1/3">
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">PRICE DETAILS</h3>
              <div className="flex justify-between mb-2">
                <span>Price ({cart.length} {cart.length > 1 ? 'items' : 'item'})</span>
                <span>₹{cart.reduce((total, item) => total + item.price, 0)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-green-500">FREE</span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between font-bold">
                <span>AMOUNT PAYABLE</span>
                <span>₹{cart.reduce((total, item) => total + item.price, 0)}</span>
              </div>
              <button className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded mt-4 hover:bg-red-700">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
