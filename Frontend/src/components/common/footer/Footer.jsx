import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
// import Pricing from "../../pricing/Pricing"
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Footer = () => {
  const saveMail = (event) => {
    event.preventDefault();
    const emailInput = document.querySelector("input").value;
    if (emailInput.trim() === "") {
      swal("Please enter your email address", {
        icon: "warning",
      });
    } 
    else if (emailInput === 'charan@gmail.com') {
      swal(
        "Thank You!",
        "You have successfully subscribed to our newsletter!",
        "success"
      );
    }
    else {
      swal(
        "Error",
        "This email address does not exist. Please try again.",
        "error"
      )
    }
  };

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>
                We'll help you find the best PG and apartment near your
                university.
              </p>
            </div>
            <button className="btn5">
              <Link to="/contact">Contact Us Today</Link>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/image.png" alt="" className="imageLogo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, discounts sent straignt in your
                inbox every month
              </p>

              <form onSubmit={saveMail}>
                {" "}
                {/* Use form element */}
                <div className="input flex">
                  <input type="email" placeholder="Email Address" required />{" "}
                  {/* Use type=email for email validation */}
                  <button type="submit">Subscribe</button>{" "}
                  {/* Use type=submit for form submission */}
                </div>
              </form>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              {/* Added key prop */}
              <h3 className="titles">{val.title}</h3>
              <p className="uni">{val.text}</p>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          Copyright © 2024 RentIT. Designd By Charandeep & Ajit. All Rights
          Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;