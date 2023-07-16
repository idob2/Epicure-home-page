import "./Menu.scss";
import ExitFromMenu from "../../assets/general_images/General.svg";
const Menu = (props: any) => {
    return (
      <nav className="menu-bar">
        <button className="exit-button" onClick={props.handleMenuClick}>
            <img className="exit-img" src={ExitFromMenu} alt="Exit" />
        </button>
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