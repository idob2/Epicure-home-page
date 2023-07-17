import "./Menu.scss";
import ExitFromMenu from "../../assets/general_images/General.svg";
import Button from "../Button/Button";
const Menu = (props: any) => {
    return (
      <nav className="menu-bar box-shadow">

      <Button
          buttonClassName="transparant-background-button"
          imgClassName="icon"
          src={ExitFromMenu}
          alt="Exit"

          onClick={props.handleMenuClick}
        ></Button>
        <div className="menu-items">
        <a href="">Resturants</a>
          <a href="">Chefs</a>
          <div className="lower-div">
          <a className="contact-us" href="">Contact Us</a>
          <a href="">Terms of use</a>
          <a href="">Privacy Policy</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Menu;