import Dishes from "../../assets/dishes/index";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./SignatureDishes.scss"
import SignatureDishesSwiper from "../Swipers/SignatureDishesSwiper";

const SignatureDishes = () => {
  return (
    <div className="signature-dishes-div">
      <div className="signature-dish-title-div">
        <p className="signature-dish-title">Signature Dishes of:</p>
      </div>
      <div>
        <SignatureDishesSwiper dishes={Dishes} />
      </div>
      <div className="all-signature-dishes-div">
        <a href="">All Restaurants</a>
        <button className="all-dishes-button">
          <img
            className="resturants-icon"
            src={AllResturantsIcon}
            alt="AllResturantsIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default SignatureDishes;
