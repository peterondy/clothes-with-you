import React from 'react'
import background from '../../images/video_background.mp4'
import './main.css'

const Main = () => {
    return (
        <main className='h-screen w-full'>
            <div className="video-background">
                <video autoPlay loop muted poster="poster.jpg">
                    <source src={background} type="video/mp4" />
                </video>
            </div>
            <h2 className='text-[#8f8f80] text-3xl pt-8'>enter into the complex styling world with AI technology</h2>
            <div className='w-full'>
                <div className='inline-flex mt-24 text-4xl space-x-4 text-gray-700 w-full justify-center'>
                    <a href="/signup" className='hover:text-gray-500 rounded py-2 px-4 bg-[#5f6363] text-[#1a2843]'>sign up</a>
                    
                    <a href="/login" className='hover:text-gray-500 rounded py-2 px-4 text-[#e9e8e3]'>log in</a>
                </div>
                <div className='mt-2 w-full'><p className='text-[#e9e8e3]'>Try for free</p></div>
                <div className='w-full'>
                    <h3 className='mt-28 text-[#aaa69a] text-2xl bg-transparent'><b>what do you want to dress you today ?</b></h3>
                </div>
            </div>
        </main>
    )
}

export default Main
