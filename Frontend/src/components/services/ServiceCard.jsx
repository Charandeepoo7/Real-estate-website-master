import React from "react"
import { service } from "../data/Data"

const ServiceCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {service.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default ServiceCard