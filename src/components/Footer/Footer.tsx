import Link from "../Link/Link";
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="footer-links-div">
                <Link text="Contact Us" link="" className="footer-link"></Link>
                <Link text="Term of Use" link="" className="footer-link"></Link>
                <Link text="Privacy Policy" link="" className="footer-link"></Link>
            </div>
        </div>
    );
}

export default Footer;