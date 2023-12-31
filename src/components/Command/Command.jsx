import React from 'react'
import background from '../../images/mens_brand.jpg'
import './command.css'

const Command = () => {
  return (
    <section className='h-screen w-full mb-12' 
        style={{ 
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>

        <div className='command-div pt-64'>
            <div className='outfit-div w-6/12 h-52 float-left bg-[#746aae]'>
                <div className='mt-8'>
                    <a href="/outfit" className='hover:text-[#aba1d2]'>I want Outfit</a>
                    <p className='text-2xl px-2 py-4'>tell what kind of piece you want and let AI based on hundreds of situe find you your next favorite outfit</p>
                </div>
            </div>
            <div className='clothes-div w-6/12 h-52 float-right bg-[#746aae]'>
                <div className='mt-8'>
                    <a href="/clothes" className='hover:text-[#756baf]'>I want Piece of clothes</a>
                    <p className='text-2xl px-2 py-4'>tell what kind of piece you want and let AI based on hundreds of situe find you your next favorite piece</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Command
