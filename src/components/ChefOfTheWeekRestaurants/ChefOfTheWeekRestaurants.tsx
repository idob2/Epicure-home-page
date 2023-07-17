import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
// import "../PopularResturants/PopularResturants.scss";
import './ChefOfTheWeekRestaurants.scss'
const ChefOfTheWeekRestaurants = () => {
    const chefOfTheWeekRestaurants = PopularResturantsList.map((restaurant) => ({
        imgUrl: restaurant.imgUrl,
        name: restaurant.name,
        chef: ""
      }));  return (
    <div className="chef-week-resturants-div">
      <div className="chef-of-week-title-div">
        <h2 className="chef-of-week-title">chef of the week:</h2>
      </div>
      <div className="chef-of-week-all-resturants-div">
        <PopularSwiper resturants={chefOfTheWeekRestaurants} />
      </div>
      <div className="all-chef-of-week-resturants-div">
        <a className="bold-link line-hight35" href="">All restaurants</a>


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
