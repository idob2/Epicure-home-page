import "./Menu.scss";
import ExitFromMenu from "../../assets/general_images/General.svg";
import Button from "../Button/Button";
import { Zoom } from "react-awesome-reveal";

const Menu = (props: {handleMenuClick: () => void}) => {
  return (
    <div className="fade-container">
      <Zoom>
        <nav className="menu-bar box-shadow">
          <div className="menu-exit-button-div">
          <Button
            buttonClassName="transparant-background-button exit-button"
            imgClassName="icon exit-image"
            src={ExitFromMenu}
            alt="Exit"
            onClick={props.handleMenuClick}
          ></Button>
          </div>
          
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
      </Zoom>
    </div>
  );
};

export default Menu;
