import "./header.css";
import Nav from './Nav';
import arrow from '../../images/icon-arrow-down.svg';

const Header = () => {
    return (
        <header className="header">
            <Nav />
            <h1 className="header__title">We are creatives</h1>
            <img className="header__arrow" src={arrow} alt="arrow" />
        </header>
    );
}

export default Header;
