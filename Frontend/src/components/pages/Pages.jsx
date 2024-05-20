import React, { useState } from "react";
import Header from "../common/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import LovelyDatabase from "../home/hero/LovelyDatabase";
import BitsPilani from "../home/hero/BitsPilani";
import Mit from "../home/hero/Mit";
import WishlistModal from "../common/header/WishlistModal";
// import '../../App.css';

const Pages = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistModalOpen, setWishlistModalOpen] = useState(false);

  const handleWishlistClick = () => {
    setWishlistModalOpen(true);
  };

  const handleWishlistClose = () => {
    setWishlistModalOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Header wishlist={wishlist} onWishlistClick={handleWishlistClick} />
        {isWishlistModalOpen && (
          <WishlistModal wishlist={wishlist} onClose={handleWishlistClose} />
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/lovelydatabase" element={<LovelyDatabase setWishlist={setWishlist} wishlist={wishlist} />} />
          <Route exact path="/bitsPilani" element={<BitsPilani setWishlist={setWishlist} wishlist={wishlist} />} />
          <Route exact path="/manipal" element={<Mit setWishlist={setWishlist} wishlist={wishlist} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;