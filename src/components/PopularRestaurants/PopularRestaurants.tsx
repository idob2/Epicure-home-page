import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./PopularRestaurants.scss";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import Button from "../Button/Button";
const PopularRestaurants = () => {
  return (
    <GenericHomeSection className="margin-div" color="white">
      <GenericContainer>
        <div className="title-div">
          <h2 className="spacing-1-25">popular restaurant in epicure:</h2>
        </div>
        <div className="small-margin-div">
          <PopularSwiper resturants={PopularResturantsList} />
        </div>
        <div className="all-resturants-div small-margin-div">
          <a className="bold-link line-hight25" href="">
            All restaurants
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
      </GenericContainer>
    </GenericHomeSection>
  );
};

export default PopularRestaurants;
