"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const { id } = params;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        const product = await response.json();
        setData(product);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  



  const handleAddToCart = (data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const { _id, title, price, image } = data;
    const existItem = cart.find(item => item._id === _id);
    if (existItem) {
      existItem.count++;
    } else {
      cart.push({ _id, title, price, image, count: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image className=" w-[20rem] sm:w-[60%]  lg:w-1/2  mx-auto sm:h-[17rem] md:h-[20rem]  h-64  object-fill rounded" alt="product" width={500} height={500} src={data.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.company}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.name}</h1>
            <div className="flex mb-4">
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 text-3xl cursor-pointer text-emerald-300  items-center pb-5 mb-5">
            </div>
            <div className="flex items-center justify-around">
              <span className="title-font font-medium text-2xl text-gray-900">{data.price}</span>
              <span className="title-font font-medium text-lg text-gray-900 ml-7">Quantity{data.quantity}</span>
              <button onClick={() => handleAddToCart(data)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
