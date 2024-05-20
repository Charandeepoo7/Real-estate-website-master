import React, { useState } from "react";
import Heading from "../../common/Heading";
import UniversityName1 from "./UniversityName1";
import "./hero.css";
import "./style.css";
import { FaRupeeSign, FaPhoneVolume, FaBed, FaHeart, FaTimes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import "./BitsPilani.css";

const BitsPilani = ({ setWishlist, wishlist }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [showWishlist, setShowWishlist] = useState(false);

  const handleWishlistToggle = (pg) => {
    const isWishlisted = wishlist.some((item) => item.name === pg.name);
    if (isWishlisted) {
      setWishlist(wishlist.filter((item) => item.name !== pg.name));
    } else {
      setWishlist([...wishlist, pg]);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Nearest PG "
            subtitle="Find new & featured PG located near your university."
          />
          <div className="backright">
            <form className="flex">
              <div className="box">
                <span>Area/Street</span>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search here..."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              <div className="box">
                <div className="pricebox">
                  <div className="boxplace">
                    <span>Price</span>
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="Enter Price..."
                      onChange={(event) => {
                        setSearchPrice(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="recent padding">
        <div className="container">
          <div className="content grid3 mtop">
            {UniversityName1.filter((val) => {
              if (searchTerm !== "" && searchPrice !== "") {
                return (
                  val.location
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  val.price
                    .replace(/[^0-9]/g, "")
                    .includes(searchPrice.replace(/[^0-9]/g, ""))
                );
              } else if (searchTerm !== "") {
                return val.location
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              } else if (searchPrice !== "") {
                return val.price
                  .replace(/[^0-9]/g, "")
                  .includes(searchPrice.replace(/[^0-9]/g, ""));
              } else {
                return val;
              }
            }).map((val, index) => {
              const {
                cover,
                name,
                location,
                category,
                price,
                contact,
                BHK,
                distance,
              } = val;
              const isWishlisted = wishlist.some((item) => item.name === val.name);
              return (
                <div className="box shadow" key={index}>
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="category flex">
                    <span
                      style={{
                        background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                  </div>
                  <div className="text">
                    <h4>{name}</h4>
                    <p>
                      <i className="fa fa-location-dot"></i> {location}
                    </p>
                    <p>
                      <div className="phone">
                        <FaPhoneVolume className="phoneicon" /> {contact}
                      </div>
                    </p>
                    <p>
                      <div className="bed">
                        <FaBed className="bedicon" /> {BHK}
                      </div>
                    </p>
                    <p>
                      <div className="distance">
                        <GiPathDistance className="distanceicon" /> {distance}
                      </div>
                    </p>
                  </div>
                  <div className="button flex">
                    <div>
                      <button className="btn2">
                        <FaRupeeSign className="priceicon" />
                        {price}
                      </button>
                    </div>
                    <span>
                      <button
                        className="wishlist-button"
                        onClick={() => handleWishlistToggle(val)}
                        style={{ color: isWishlisted ? "red" : "grey" }}
                      >
                        <FaHeart className="heart-icon" />
                      </button>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Wishlist Modal */}
      {showWishlist && (
        <div className="wishlist-modal">
          <div className="wishlist-content">
            <div className="wishlist-header">
              <h2>Wishlist</h2>
              <button className="close-button" onClick={() => setShowWishlist(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="wishlist-items">
              {wishlist.map((item, index) => (
                <div key={index} className="wishlist-item">
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Button to toggle Wishlist Modal */}
      <button className="wishlist-toggle-button" onClick={() => setShowWishlist(!showWishlist)}>
        <FaHeart className="heart-icon" />
      </button>
    </>
  );
};

export default BitsPilani;