"use client"
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Image from 'next/image';


const Page = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        setCartItems(JSON.parse(cartData));
      }
    }, []);
  
    const updateCartItem = (index, count) => {
      const updatedItems = [...cartItems];
      updatedItems[index] = { ...updatedItems[index], count };
      setCartItems(updatedItems);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    };
  
    const deleteProduct = (_id) => {
      const filteredItems = cartItems.filter((item) => item._id !== _id);
      setCartItems(filteredItems);
      localStorage.setItem('cart', JSON.stringify(filteredItems));
    };
  
    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
      return totalPrice.toFixed(2);
    };

    useEffect(() => {
        const updatedItems = cartItems.filter((item) => item.count > 0);
        if (cartItems.length !== updatedItems.length) {
          setCartItems(updatedItems);
          localStorage.setItem('cart', JSON.stringify(updatedItems));
        }
      }, [cartItems]);

    return (
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-40">
            <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
            {cartItems.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 py-4"

                >
                    <div className="flex items-center">
                        <Image src={item.image} alt={item.name} width={100} height={100} className="h-16 w-16 object-cover mr-4" />
                        <div>
                            <h2 className="text-sm w-[40vw] font-medium line-clamp-3">{item.name}</h2>
                            <p className="text-gray-500">RS {item.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-7 text-md">
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => deleteProduct(item._id)}>
                            <FaTrashAlt />
                        </button>
                        <button className="mr-2 text-gray-400 hover:text-gray-600" onClick={() => updateCartItem(index, item.count - 1)}>
                            <AiOutlineMinus />
                        </button>
                        <p className="text-gray-500">{item.count}</p>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => updateCartItem(index, item.count + 1)}>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            ))}
            <div className="mt-6 flex justify-around">
                <p>Total Price: RS {calculateTotalPrice()}</p>
                <button
                    className="bg-pink-500 rounded-md text-black font-Roboto mb-8 py-2 px-7  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-500"
                >Check Out</button>
            </div>
        </div>
    );
};

export default Page;
