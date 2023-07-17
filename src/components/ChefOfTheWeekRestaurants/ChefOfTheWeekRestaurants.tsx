import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "../PopularResturants/PopularResturants.scss";
const ChefOfTheWeekRestaurants = () => {
    const chefOfTheWeekRestaurants = PopularResturantsList.map((restaurant) => ({
        imgUrl: restaurant.imgUrl,
        name: restaurant.name,
        chef: ""
      }));  return (
    <div className="popular-resturants-div">
      <div className="title-div">
        <p className="popular-title">chef of the week:</p>
      </div>
      <div>
        <PopularSwiper resturants={chefOfTheWeekRestaurants} />
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

export default ChefOfTheWeekRestaurants;
