import React, { useState } from "react";
import {AiOutlineHome,  AiOutlineContacts, AiOutlineUser} from 'react-icons/ai';
import {MdOutlineMiscellaneousServices , MdOutlineProductionQuantityLimits,} from 'react-icons/md';
import "./nav.css"

export default function Navbar(){
    const [activeNav , setActiveNav] = useState('#')
    return(
        <nav className="mobile__menu__nav">
            <a href="#home"  onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
            <a href="#products"  onClick={() => setActiveNav('#products')} className={activeNav === "#products" ? 'active' : ''}><MdOutlineProductionQuantityLimits /></a>
            <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineContacts /></a>
        </nav>
    )
}