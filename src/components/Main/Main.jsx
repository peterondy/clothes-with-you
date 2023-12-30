import React from 'react'
import background from '../../images/background_city_3.jpg'
import './main.css'
const Main = () => {
  return (
    <main className='h-screen w-full' 
        style={{ height: 'calc(100vh - 112px)', 
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'

    }}>
        <h2 className='text-gray-700 text-3xl pt-8'>enter into the complex styling world with AI technology</h2>
        <div className='w-full'>
            <div className='inline-flex mt-24 text-4xl space-x-4 text-gray-700 w-full justify-center'>
                <a href="/signup" className='hover:text-gray-500'>sign up</a>
                <p>/</p>
                <a href="/login" className='hover:text-gray-500'>log in</a>
            </div>
            <div className='mt-2 w-full'><p className='text-lg'>Try for free</p></div>
            <div className='w-full'>
                <h3 className='mt-28 text-3xl bg-transparent'><b>what do you want to dress you today ?</b></h3>
            </div>
        </div>
    </main>
  )
}

export default Main