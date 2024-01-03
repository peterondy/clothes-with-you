import React from 'react'
import './main.css'
import logo from '../../images/logo.png'

const Main = () => {

    return (
        <div className='ml-8 h-screen' >
            <header className='h-28 w-full'>
                <h1 className='text-2xl pt-8 text-[#ffffff] w-full' style={{fontFamily: 'Staatliches'}}> <span className='float-left float-start mr-4'>Developed by SEN</span></h1>
            </header>
            <main className='h-full w-full'>
                <div className="w-full inline-flex">
                    <h2 className='float-left float-start text-[#ffffff] w-full z-50 inline-flex uppercase'><b><span className='float-left'>clothes</span> <br />  <span className='float-left float-start'>with <br /> you</span> <img src={logo} alt="logo" /></b></h2>
                </div>
                <div className='w-full'>
                    <h3 className='text-[#ffffff] bg-transparent w-full element'><b className='float-left'><span className='float-left'>Welcome into the complex </span><br /> <span className='float-left'> styling's world</span></b></h3>
                </div>
                <div className='w-full'>
                    <a href="/discover">Get started</a>
                </div>
            </main>
        </div>
    )
}

export default Main
