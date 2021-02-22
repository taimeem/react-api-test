import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

function Header() {
    return (
        <div className="Header">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header
