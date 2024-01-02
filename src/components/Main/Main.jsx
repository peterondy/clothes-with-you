import React from 'react'
import './main.css'
import logo from '../../images/logo.png'

const Main = () => {

    return (
        <div className='ml-8' >
            <header className='h-28 w-full'>
                <h1 className='text-2xl pt-8 text-[#ffffff] w-full' style={{fontFamily: 'Staatliches'}}> <span className='float-left float-start mr-4'>Developed by SEN</span></h1>
            </header>
            <main className='h-full w-full'>
                <div className="w-full h-44 inline-flex">
                    <h2 className='float-left float-start text-[#ffffff] w-full text-5xl pt-8 z-50 inline-flex uppercase'><b><span className='float-left'>clothes</span> <br />  <span className='float-left float-start'>with <br /> you</span> <img src={logo} className='w-[150px] h-[150px] relative top-[-125px] left-[90px]' alt="logo" /></b></h2>
                </div>
                <div className='w-full h-42'>
                    <h3 className='text-[#ffffff] bg-transparent w-full element'><b className='float-left'><span className='float-left'>Welcome in the complex </span><br /> <span className='float-left'> styling's world</span></b></h3>
                </div>
                <div className='w-full z-50 text-center justify-center justify-items-center justify-self-center'>
                    <ul className='float-left float-start'>
                        <li className='rounded border-gray-50 border-solid border-[1px] text-2xl'><a href="/outfit" className='element text-gray-50 rounded w-full hover:text-gray-400 px-8'>I'm looking for outfit</a></li>
                        <li className='rounded border-gray-50 border-solid border-[1px] text-2xl'><a href="/piece" className='element text-gray-50 rounded w-full hover:text-gray-400 px-8'>I'm looking for a piece of clothing</a></li>
                        <li className='rounded border-gray-50 border-solid border-[1px] text-2xl'><a href="/ai-power" className='element text-gray-50 rounded w-full hover:text-gray-400 px-8'>I discover AI power</a></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Main
