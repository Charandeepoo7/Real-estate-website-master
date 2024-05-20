import React from "react";
import { Link } from "react-router-dom"; 
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Nearest PG " className="title"
            subtitle="Find new & featured PG located near your university."
          />
          <div className="backright">
            <form className="flex">
              <div className="dropdown">
                <button className="dropbtn">Select University</button>
                <div className="dropdown-content">
                  <Link to="/lovelyDatabase">Lovely Professional University</Link>
                  <Link to="/manipal">Manipal Institute of Technology (VIT)</Link>
                  <Link to="/bitsPilani">Birla Institute of Technology and Science (BITS Pilani)</Link>
                </div>
              </div>  
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;