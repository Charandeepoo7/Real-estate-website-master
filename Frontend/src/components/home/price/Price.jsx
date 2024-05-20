import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Here you can select any package you want , according to your convenience . Down there you can also check the prices of different packages and benefits.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
