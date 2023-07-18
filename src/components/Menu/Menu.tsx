import "./Menu.scss";
import { Slide } from "react-awesome-reveal";
import ExitFromMenu from "../../assets/general_images/General.svg";
import Button from "../Button/Button";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";

const Menu = (props: any) => {
  return (
    <div className="fade-container">
      <Slide>
        <nav className="menu-bar box-shadow">
          <Button
            buttonClassName="transparant-background-button"
            imgClassName="icon exit-button"
            src={ExitFromMenu}
            alt="Exit"
            onClick={props.handleMenuClick}
          ></Button>
          <div className="menu-items">
            <a href="">Resturants</a>
            <a href="">Chefs</a>
            <div className="lower-div">
              <a className="contact-us" href="">
                Contact Us
              </a>
              <a href="">Terms of use</a>
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </nav>
      </Slide>
    </div>
  );
};

export default Menu;
