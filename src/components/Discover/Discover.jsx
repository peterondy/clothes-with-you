import React, {useEffect} from 'react'
import './discover.css'
const Discover = () => {
  useEffect(() => {
    function handleScroll() {
      var element = document.getElementById('h1')
      var section = document.getElementById('ai')
      
      if (element && section) {
        var sectionPosition = section.getBoundingClientRect().top + window.scrollY
        var scrollPosition = window.scrollY
    
        if (scrollPosition >= sectionPosition) {
          element.classList.add('moveRight')
        } else {
          element.classList.remove('moveRight')

        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <section className='w-[100%] h-screen' id='ai'>
      <div className='w-[90%] mx-[5%]'>
        <h1 className='float-left float-start' id='h1'>
            You saw someone with your dream's outfit but you don't know where find it? <br />
            Here is the place to be ! Enter a picture of the outfit and let the AI search for you
        </h1>
        <div className='mt-24 w-full h-52 discover rounded'>
            <a href="/discover">Get started</a>
        </div>
      </div>
    </section>
  )
}

export default Discover
