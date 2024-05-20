import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our companys work process' />

            <p>Welcome to RentIT, your go-to platform for finding the perfect accommodations near 
              universities. At RentIT, we understand the challenges students face when searching 
              for a place to live during their academic journey. That's why we've created a seamless and 
              convenient platform that offers a wide range of rental options, including PGs, apartments, flats,
              villas, and condos, all located within close proximity to universities. With our user-friendly 
              interface, students can easily browse through our extensive listings, explore property details, 
              and book their desired accommodations with just a few clicks. </p>
              <p>Whether you're looking for a cozy 
              apartment or a spacious villa, we have options to suit every preference and budget. Choose from 
              our three flexible packages – Basic, Standard, and Platinum – to access exclusive features and 
              benefits tailored to your needs. Whether you're a budget-conscious student or seeking premium 
              amenities, we have the perfect package for you. At RentIT, we are committed to 
              providing unparalleled convenience, reliability, and satisfaction to our users. Join us today and 
              experience hassle-free rental solutions for your university life.</p>
            </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
