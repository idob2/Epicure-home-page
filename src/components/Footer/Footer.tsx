import Link from "../Link/Link";
import "./Footer.scss";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";

const Footer = () => {
  return (
    <GenericHomeSection color="white">
      <div className="footer-links-div">
        <Link text="Contact Us" link=""></Link>
        <Link text="Term of Use" link=""></Link>
        <Link text="Privacy Policy" link=""></Link>
      </div>
    </GenericHomeSection>
  );
};

export default Footer;
