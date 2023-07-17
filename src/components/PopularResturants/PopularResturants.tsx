import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./PopularResturants.scss";
import GenericContainer from "../GenericContainer/GenericContainer";
import Button from "../Button/Button";
const PopularResturants = () => {
  return (
    <>
      <GenericContainer>
        <div>hi there</div>
      </GenericContainer>
      <div className="popular-resturants-div">
        <div className="title-div">
          <h2 className="spacing-1-25">popular restaurant in epicure:</h2>
        </div>
        <div>
          <PopularSwiper resturants={PopularResturantsList} />
        </div>
        <div className="all-resturants-div">
          <a className="bold-link line-hight25" href="">
            All restaurants
          </a>
          <Button
            buttonClassName="transparant-background-button"
            imgClassName="icon"
            src={AllResturantsIcon}
            alt="AllResturantsIcon"
            onClick={() => {console.log("button clicked")}}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default PopularResturants;
