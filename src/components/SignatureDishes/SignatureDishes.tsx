import Dishes from "../../assets/dishes/index";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./SignatureDishes.scss"
import SignatureDishesSwiper from "../Swipers/SignatureDishesSwiper";
import Button from "../Button/Button";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";

const SignatureDishes = () => {
  return (
    <GenericHomeSection className="margin-div" color="white">
        <div className="signature-dish-title-div">
          <h2>Signature Dishes of:</h2>
        </div>
        <div className="small-margin-div">
          <SignatureDishesSwiper dishes={Dishes} />
        </div>
        <div className="all-signature-dishes-div small-margin-div">
          <a className="bold-link line-hight35" href="">
            All Restaurants
          </a>
          <Button
            buttonClassName="transparant-background-button"
            imgClassName="icon"
            src={AllResturantsIcon}
            alt="AllResturantsIcon"
            onClick={() => {
              console.log("button clicked");
            }}
          ></Button>
        </div>
    </GenericHomeSection>
  );
};

export default SignatureDishes;
