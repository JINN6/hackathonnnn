import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import React from "react";
import Section from "@/app/components/Section";
import TopProducts from "@/app/components/TopProducts";
import Banner from "@/app/components/Banner";
import Blogs from "@/app/components/Blogs";
import Banner2 from "@/app/components/Banner2";
import Footer from "@/app/components/Footer";
// import Banner from '@/app/components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>
      <Section />
      <TopProducts />
      <Banner />
      <Blogs />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;