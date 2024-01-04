import React from 'react'
import './discover.css'
const Discover = () => {

  return (
    <section className='w-[100%] h-screen' id='ai'>
      <div className='w-[90%] mx-[5%]'>
        <h1 className='float-left float-start' id='h1'>
            You saw someone with your dream's outfit but you don't know where find it? <br />
            Here is the place to be ! Enter a picture of the outfit and let the AI search for you
        </h1>
        <div className='w-full h-52 discover rounded'>
            <a href="/discover">Get started</a>
        </div>
      </div>
    </section>
  )
}

export default Discover
