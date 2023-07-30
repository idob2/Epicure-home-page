import "./TempComponent.scss";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import HamburgIcon from "../../assets/nav_bar_images/HAMBUR.svg";
import AboutLogo from "../../assets/nav_bar_images/about-logo@3x 1.svg";
import SearchIcon from "../../assets/nav_bar_images/Group.svg";
import BagIcon from "../../assets/nav_bar_images/Property 1=Bag.svg";
import GeneralIcon from "../../assets/nav_bar_images/General.svg";
import Button from "../Button/Button";
const TempComponent = (props: any) => {
  return (
    <GenericHomeSection color="white">
      <GenericContainer>
        <nav className="main-navigation">
          <div className="hambur-logo-div">
            <Button
              buttonClassName="transparant-background-button"
              imgClassName="hamburg-img"
              src={HamburgIcon}
              alt="Menu"
              onClick={props.handleMenuClick}
            ></Button>
          </div>
          <div className="about-logo-div">
            <img className="about-logo" src={AboutLogo} alt="AboutLogo" />
            <span className="epicure">EPICURE</span>
            <a className="link-nav-bar" href="">
              Restaurants
            </a>
            <a className="link-nav-bar" href="">
              Chefs
            </a>
          </div>

          <div className="order-bag-div">
            <Button
              buttonClassName="transparant-background-button"
              imgClassName="icon"
              src={SearchIcon}
              alt="Search"
              onClick={props.handleMenuClick}
            ></Button>

            <Button
              buttonClassName="transparant-background-button"
              imgClassName="icon"
              src={GeneralIcon}
              alt="Personal info"
              onClick={() => {
                console.log("button clicked");
              }}
            ></Button>

            <Button
              buttonClassName="transparant-background-button"
              imgClassName="icon"
              src={BagIcon}
              alt="Order list"
              onClick={props.handleBagClick}
            ></Button>
          </div>
        </nav>
      </GenericContainer>
    </GenericHomeSection>
  );
};
export default TempComponent;
