'use client';

import { useRouter } from 'next/navigation';  // Correct hook for route parameters in Next.js
import React, { useEffect, useState } from 'react';
import productData from '@/utils/ProductData';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Link from 'next/link';
import Image from 'next/image';  // For image optimization in Next.js

const Page = () => {
  const router = useRouter();
  const { id } = router.query;  // Accessing the dynamic parameter using `router.query`

  const [dataFilter, setDataFilter] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const paramID = id as string;
      const filterData = productData.filter((item) => item.id === Number(paramID));
      setDataFilter(filterData[0]);
    }
  }, [id]);  // Re-run when `id` changes

  if (!dataFilter) {
    return <div>Loading...</div>;  // Handle case if product data is not yet available
  }

  return (
    <div>
      <Header />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={dataFilter?.imageUrl}
                width={500}  // Specify image dimensions for optimization
                height={500} // Specify image dimensions for optimization
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Ecommerce
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {dataFilter?.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        fill={index < 4 ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-black"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{dataFilter?.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly gap-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {dataFilter?.price}
                  </span>
                  <div className="flex gap-4 mr-20">
                    <Link href="/pages/cart">
                      <button className="flex ml-auto bg-white text-black border border-black hover:text-white hover:bg-black py-2 px-6 rounded">
                        Add to Cart
                      </button>
                    </Link>

                    <Link href="/pages/checkout">
                      <button className="flex ml-auto bg-white text-black border border-black hover:text-white hover:bg-black py-2 px-6 rounded">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
