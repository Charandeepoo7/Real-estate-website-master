import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Popular Property Listed' subtitle='These are some of the most popular properties near the universities' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
