import React, { useEffect } from 'react'
import './Header.css'
import Typed from 'typed.js';


const Header = () => {

     useEffect(() =>{

        const options = {
            strings:["Frontend Web Developer.","Responsive Designer.","UI/UX developer.","Problem Solver.",  "React.js Developer.","Open Source Contributor."],
            typeSpeed:70,
            backSpeed:70,
            bacKDelay:1000,
            loop:true
        };

        const typed = new Typed(".text",options);

        // Cleanup function to destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };

     },[]);



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
        <div className="header-text">
                    <p>I'm a <span className="text"></span></p>
                    <h1>Hello,It's Me <span>Rishab</span> Agarwal From Pune</h1>
                </div>
    </div>
  )
}

export default Header;
