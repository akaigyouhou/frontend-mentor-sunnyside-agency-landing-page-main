import { useState } from 'react';
import "./nav.css";
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import Menu from './Menu';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        const value = !open;
        setOpen(value);
    }

    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="sunnyside" />
            <img className="nav__hamburger" src={hamburger} alt="hamburger" onClick={handleOpen} />
            <Menu open={open} />
        </nav>
    );
}

export default Nav;