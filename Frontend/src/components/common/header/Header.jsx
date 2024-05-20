import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = ({ wishlist, onWishlistClick }) => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <a href="/"><img src="./images/logo.png" alt="" /></a>
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="button flex">
          <div className="wishlist-container" onClick={onWishlistClick}>
            <FaHeart className="hearticon" style={{ color: wishlist.length > 0 ? "red" : "#827f7f" }} />
            <span className="wishlist-count">{wishlist.length}</span>
          </div>
          <button className="btn1">
            <i className="fa fa-sign-out"></i> log out
          </button>
        </div>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;