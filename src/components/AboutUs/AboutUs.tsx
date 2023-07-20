import {
  GooglePlayButton,
  AppleStoreButton,
} from "../../assets/about_us_logos/index";
import Button from "../Button/Button";
import EpicureLogo from "../../assets/general_images/epicure_logo.svg";
import Description from "../Description/Description";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <GenericHomeSection className="margin-div" color="#fafafa">
          <div className="about-us-inner-div">
            <div className="epicure-icon-div">
              <img src={EpicureLogo} alt="Epicure Logo" />
            </div>
            <div className="store-description-div">
              <div className="stores-div">
                <Button
                  buttonClassName="google-play-button transparant-background-button"
                  imgClassName="google-play-image transparant-background-button"
                  src={GooglePlayButton}
                  alt="google play"
                  onClick={() => {
                    console.log("button clicked");
                  }}
                ></Button>
                <Button
                  buttonClassName="apple-store-button transparant-background-button"
                  imgClassName="apple-store-image transparant-background-button"
                  src={AppleStoreButton}
                  alt="apple store"
                  onClick={() => {
                    console.log("button clicked");
                  }}
                ></Button>
              </div>
              <div className="about-us-descreption-div">
                <h2 className="header"> About us:</h2>

                <Description className="spacing-2-14"></Description>
              </div>
            </div>
          </div>
    </GenericHomeSection>
  );
};

export default AboutUs;
