import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <footer className='w-full h-24'>
        <ul className='inline-flex text-4xl space-x-6 my-4'>
            <h6>Follow US : </h6>
            <li><a href="https://www.facebook.com/"><i className="bi bi-facebook text-[#433840] hover:text-[#5e555d]"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="bi bi-twitter text-[#433840] hover:text-[#5e555d]"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="bi bi-pinterest text-[#433840] hover:text-[#5e555d]"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="bi bi-instagram text-[#433840] hover:text-[#5e555d]"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="bi bi-facebook text-[#433840] hover:text-[#5e555d]"></i></a></li>
            <li><a href="https://www.facebook.com/"><i className="bi bi-youtube text-[#433840] hover:text-[#5e555d]"></i></a></li>
        </ul>
    </footer>
  )
}
