import "./footer.css";
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../images/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg';



const Footer = () => {
    return (
        <footer className="footer">
            <Logo className="footer__logo" />
            <div className="footer__button-container">
                <button className="footer__button">About</button>
                <button className="footer__button">Services</button>
                <button className="footer__button">Projects</button>
            </div>
            <div className="footer__icon-container">
                <Facebook className="footer__icon" />
                <Instagram className="footer__icon" />
                <Twitter className="footer__icon" />
                <Pinterest className="footer__icon" />
            </div>
        </footer>
    );
}

export default Footer;
