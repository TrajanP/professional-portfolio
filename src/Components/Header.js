//Library Imports
import React from 'react';
//Media Imports
import {Link} from 'react-router-dom';
import {IoEarthSharp} from 'react-icons/io5';
import {BsQuestionCircleFill, BsPersonCircle} from 'react-icons/bs';
import {AiOutlineFileSearch, AiOutlineDashboard} from 'react-icons/ai';
//CSS Imports
import css from './CSS-Components/header.module.css';

const Header = () => {
    return (
        <div className={css.headerDisplay}>
            <div  className={css.logo}>
                <img style={{width:"100px", height:"100px"}} src="./Media/logo1.gif" alt="Website Logo" repeat/>
                Trajan's Website 
            </div>
            <nav style={{marginTop: "25px"}}>
                <ul className={css.navLinks}>
                    <Link to="/" Home />
                    <li><h3><Link to="/professional-portfolio/"> <IoEarthSharp style={{marginBottom: "3px"}}/> Home </Link></h3></li>
                    <li><h3><Link to="/professional-portfolio/about"> <BsPersonCircle style={{marginBottom: "3px"}}/> About Me</Link></h3></li>
                    <li><h3><Link to="/professional-portfolio/portfolio"> <AiOutlineFileSearch style={{marginBottom: "3px", height: "18px"}}/> Portfolio </Link></h3></li>
                    <li><h3><Link to="/professional-portfolio/faq"> <BsQuestionCircleFill style={{marginBottom: "3px", height: "16px"}}/> FAQ </Link></h3></li>
                    <li><h3><Link to="/professional-portfolio/dashboard"> <AiOutlineDashboard style={{marginBottom: "3px", height: "40px"}}/> Dashboard </Link></h3></li>
                </ul>
            </nav>
            <a className={css.contactBtn} href="#"><button><Link to="/professional-portfolio/contact"> Contact </Link></button></a>
        </div>
    );
};

export default Header;