import './App.css'
import { useState } from 'react';
//import Main from './components/Main/Main'
import Discover from './components/Discover/Discover'
import logo from './images/logo.png'
import './components/Main/main.css'
import './components/Discover/discover.css'
//import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [mainClass, setMainClass] = useState('block')
  const [discoverClass, setDiscoverClass] = useState('hidden')

  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
    setMainClass('hidden')
    setDiscoverClass('block')
  }

  let content;

  if (!isComponentVisible) {
    content = (
      <div className={`ml-8 h-screen ${mainClass}`}>
        <header className='h-28 w-full'>
            <h1 className='text-2xl pt-8 text-[#ffffff] w-full' style={{fontFamily: 'Staatliches'}}> <span className='float-left float-start mr-4'>Developed by SEN</span></h1>
        </header>
        <main className='w-full'>
            <div className="w-full inline-flex">
                <h2 className='float-left float-start text-[#ffffff] w-full z-50 inline-flex uppercase'><b><span className='float-left'>clothes</span> <br />  <span className='float-left float-start'>with <br /> you</span> <img src={logo} alt="logo" /></b></h2>
            </div>
            <div className='w-full'>
                <h3 className='text-[#ffffff] bg-transparent w-full element'><b className='float-left'><span className='float-left'>Welcome into the  </span><br /> <span className='float-left'> styling's world</span></b></h3>
            </div>
            <div className='w-full'>
                <button onClick={handleClick}>I discover the Ai power</button>
            </div>
        </main>
      </div>
    );
  } else {
    content = (
      <section className={`w-[100%] h-screen ${discoverClass}`} id='ai'>
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
  return (
    <div className="App">
        {content}
    </div>
  )
}

export default App
