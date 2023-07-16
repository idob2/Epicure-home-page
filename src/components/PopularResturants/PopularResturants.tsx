import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./PopularResturants.scss";
const PopularResturants = () => {
  return (
    <div className="popular-resturants-div">
      <div className="title-div">
        <p className="popular-title">popular restaurant in epicure:</p>
      </div>
      <div>
        <PopularSwiper resturants={PopularResturantsList} />
      </div>
      <div className="all-resturants-div">
        <a href="">All restaurants</a>
        <button className="resturants-button">
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

export default PopularResturants;
