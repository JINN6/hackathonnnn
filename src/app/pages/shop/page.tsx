import Card from "@/app/components/common/Card";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TextData from "@/app/components/TextData";
import productData from "@/utils/productData.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />

      {/* Banner Image */}
      <div className="w-full flex justify-center my-6">
        {/* Fix: Removed `public/` from src path as the public folder is implicit */}
        {/* Added width and height properties to Image */}
        <Image
          src="/banner5.png" 
          alt="Banner"
          width={1440} 
          height={316} 
          className="" // Optional: Tailwind for responsiveness
        />
      </div>

      {/* Filter Image */}
      <div className="w-full flex justify-center my-6">
        {/* Added explicit width and height for the filter image */}
        <Image
          src="/filter.png"
          alt="Filter"
          width={1440} 
          height={200}
        />
      </div>

      {/* Product Cards */}
      <div className="flex justify-center items-center flex-wrap gap-4 my-20">
        {productData.map((item) => {
          const { price, imageUrl, title, id } = item;
          return (
            <Link key={id} href={`/pages/productDetails/${id}`}>
              <Card key={id} title={title} imageUrl={imageUrl} price={price} />
            </Link>
          );
        })}
      </div>

      {/* Additional Components */}
      <TextData />
      <Footer />
    </div>
  );
};

export default page;
