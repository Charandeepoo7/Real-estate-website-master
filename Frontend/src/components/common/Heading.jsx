import React from "react"
import "./Heading.css"
const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1 style={{ fontSize: "3rem"}}>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
