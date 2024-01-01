import React from 'react'
import background from '../../images/video_background.mp4'
import './main.css'
import walpaper from '../../images/walpaper.jpg'
import logo from '../../images/logo.png'

const Main = () => {

    return (
        <main className='h-screen w-full'
            style={{ 
                height: 'calc(100vh - 112px)', 
                backgroundImage: `url(${walpaper})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
            <h2 className='text-[#ffffff] text-5xl pt-8 z-50 inline-flex uppercase'><b>clothes with you</b> <img src={logo} className='w-[100px] h-[80px] relative top-[-30px]' alt="logo" /></h2>
            <div className='w-full'>
                <h3 className='text-[#c4c2c5] text-2xl bg-transparent'><b>Welcome in the complex styling's world</b></h3>
            </div>
            <div className='w-full z-50 text-center justify-center justify-items-center justify-self-center'>
                <ul>
                    <li className='w-full border-gray-50 border-solid border-[1px] text-3xl'><a href="/outfit" className='text-gray-50 my-8 rounded w-full hover:text-gray-400'>I'm looking for outfit</a></li>
                    <li className='w-full border-gray-50 border-solid border-[1px] text-3xl'><a href="/piece" className='text-gray-50 my-8 rounded w-full hover:text-gray-400'>I'm looking for a piece of clothing</a></li>
                    <li className='w-full border-gray-50 border-solid border-[1px] text-3xl'><a href="/ai-power" className='text-gray-50 my-8 rounded w-full hover:text-gray-400'>I discover AI power</a></li>
                </ul>
            </div>
        </main>
    )
}

export default Main
