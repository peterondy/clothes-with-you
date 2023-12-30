import React from 'react'
import './discover.css'
const Discover = () => {
  return (
    <aside className='w-[80%] mx-[10%] mb-4 '>
        <h1 className='text-4xl'>
            no inspiration?<br />
            don't worry put an outfit style that you like and let ai find you where you can buy the outfits piece
        </h1>
        <div className='mt-24 w-full h-52 discover rounded'>
            <a href="/discover"><h6 className='text-4xl pt-24'>discover ai power</h6></a>
        </div>
    </aside>
  )
}

export default Discover