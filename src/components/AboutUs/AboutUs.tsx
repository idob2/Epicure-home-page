import {
  GooglePlayButton,
  AppleStoreButton,
} from "../../assets/about_us_logos/index";
import Button from "../Button/Button";
import EpicureLogo from '../../assets/general_images/epicure_logo.svg';
// import Description from "./aboutUs";
import "./AboutUs.scss";
import Description from "../Description/Description";
const AboutUs = () => {
  return (
    <div className="about-us-outer-div">
      <div className="about-us-inner-div">
        <div className="epicure-icon-div">
          <img src={EpicureLogo} alt="Epicure Logo" />
        </div>
        <div className="store-description-div">
          <div className="stores-div">
            <Button
              buttonClassName="google-play-button"
              imgClassName="google-play-image"
              src={GooglePlayButton}
              alt="google play"
            ></Button>
            <Button
              buttonClassName="apple-store-button"
              imgClassName="apple-store-image"
              src={AppleStoreButton}
              alt="apple store"
            ></Button>
          </div>
          <div className="about-us-descreption-div">
            <h2 className="header"> About us:</h2>
            
                <Description className="spacing-2-14"></Description>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
