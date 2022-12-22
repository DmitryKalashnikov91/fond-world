// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpeg';
import MobileMenu from './mobileMenu/MobileMenu';
import NavBar from './navBar';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='d-flex justify-content-between fixed-top'>
            <img src={logo} alt='logo' width={70} height={70} />
            <h1
                className='shadow-lg p-2 mb-3 rounded user-select-none title text-primary logo_top'
                onClick={() => navigate('/')}>
                Фонд наш МИР
            </h1>
            <NavBar />
            <MobileMenu />
        </header>
    );
};

export default Header;
