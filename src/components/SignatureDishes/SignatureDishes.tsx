import Dishes from "../../assets/dishes/index";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./SignatureDishes.scss"
import SignatureDishesSwiper from "../Swipers/SignatureDishesSwiper";
import Button from "../Button/Button";

const SignatureDishes = () => {
  return (
    <div className="signature-dishes-div">
      <div className="signature-dish-title-div">
        <h2 className="signature-dish-title">Signature Dishes of:</h2>
      </div>
      <div>
        <SignatureDishesSwiper dishes={Dishes} />
      </div>
      <div className="all-signature-dishes-div">
        <a className="bold-link line-hight35" href="">All Restaurants</a>
        <button className="all-dishes-button">
        <Button
            buttonClassName="transparant-background-button"
            imgClassName="icon"
            src={AllResturantsIcon}
            alt="AllResturantsIcon"
          ></Button>
        </button>
      </div>
    </div>
  );
};

export default SignatureDishes;
