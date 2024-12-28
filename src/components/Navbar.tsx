"use client"
import React, { useState } from 'react'
import "./components.css"
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [navbarShow, setNavbarShow] = useState(false)
    return (
        <div className='navbar'>
            <h1 className='logo'>HITCHED</h1>
            <ul className='navbar-nav'>
                <li><Link href="">HOME</Link></li>
                <li><Link href="">ABOUT</Link></li>
                <li><Link href="">EVENTS</Link></li>
                <li><Link href="">MEMBERSHIPS</Link></li>
                <li><Link href="">GALLERY</Link></li>
                <li className='contact'><Link href="">CONTACT</Link></li>
            </ul>

            <ul className={`mobile-view ${navbarShow ? "show" : ""}`}>
                <li><Link href="">HOME</Link></li>
                <li><Link href="">ABOUT</Link></li>
                <li><Link href="">EVENTS</Link></li>
                <li><Link href="">MEMBERSHIPS</Link></li>
                <li><Link href="">GALLERY</Link></li>
                <li><Link href="">CONTACT</Link></li>
            </ul>
            {!navbarShow ? <FaBars onClick={() => setNavbarShow(!navbarShow)} className='bars' /> : <IoMdClose onClick={() => setNavbarShow(!navbarShow)} className='bars' />}
        </div>
    )
}

export default Navbar