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


  const [showFullText, setShowFullText] = useState(false);
  const wordLimit = 30;

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = data.description ? data.description.split(' ').slice(0, wordLimit).join(' ') : '';




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
    <section className="text-gray-600 body-font font-Roboto overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image className=" h-[15rem] w-[15rem] sm:w-[60%]  lg:w-[23rem] lg:h-[23rem]  mx-auto sm:h-[17rem] md:h-[20rem] md:w-[20rem]  object-fill rounded" alt="product" width={500} height={500} src={data.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className='flex space-x-4'>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.company}</h2>
              <h2 className="text-sm title-font text-amber-700 tracking-widest">Only {data.quantity} left in stock</h2>
            </div>
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">{data.name}</h1>
            <div className="flex mb-4">
            </div>
            <p className="leading-relaxed">
              {showFullText ? (
                <p className="text-sm">
                  {data.description}{' '}
                  {data.description && data.description.length > wordLimit && (
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={handleClick}
                    >
                      Read Less
                    </button>
                  )}
                </p>
              ) : (
                <p className="text-sm">
                  {truncatedText}{' '}
                  {data.description && data.description.length > wordLimit && (
                    <button
                      className="text-blue-500 hover:text-blue-800"
                      onClick={handleClick}
                    >
                      Read More
                    </button>
                  )}
                </p>
              )}
            </p>
            <div className="flex mt-6 text-3xl cursor-pointer text-emerald-300  items-center pb-5 mb-5">
            </div>
            <div className="flex items-center justify-around">
              <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
              <button onClick={() => handleAddToCart(data)} className="bg-black text-white font-Roboto  py-2 px-4  hover:bg-[#011f4b] hover:text-amber-200 hover:rounded-3xl transition-all duration-1000">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
