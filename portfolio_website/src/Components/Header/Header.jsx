import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className='title'> <span>R</span>ishab.</div>
            <ul className='nav-menu'>
                <li className='list-1'><a href="">Home</a></li>
                <li className='list-2'><a href="">About me</a></li>
                <li className='list-3'><a href="">Skills</a></li>
                <li className='list-4'><a href="">Projects</a></li>
            </ul>
                <div className="nav-connect"> <a href=""> Connect with Me</a></div>
        </div>
    </div>
  )
}

export default Header;
