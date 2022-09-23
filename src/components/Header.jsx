import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='header-container'>
            <NavLink to="/" >
                {/* <img src={logo} alt="logo" height="140$"/> */}
                <div className='header-container-logo'>
                    <p>Geek of Automation</p>
                </div>
            </NavLink>
            <div className='header-container-right'>
                <a href="https://github.com/AlexKomanov/react-online-courses-system" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCtkgFDoX3_VaJJ9Aj0EEZxg" target="_blank">
                    <FaYoutube />
                </a>
                <a href="https://www.linkedin.com/in/alexander-komanov-88b138158/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/akomanov" target="_blank">
                    <FaFacebook />
                </a>


            </div>
        </header>
    )
}

export default Header