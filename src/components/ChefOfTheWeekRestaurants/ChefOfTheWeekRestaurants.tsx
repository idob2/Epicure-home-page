import "./ChefOfTheWeekRestaurants.scss";
import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import Button from "../Button/Button";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
const ChefOfTheWeekRestaurants = () => {
  const chefOfTheWeekRestaurants = PopularResturantsList.map((restaurant) => ({
    imgUrl: restaurant.imgUrl,
    name: restaurant.name,
    chef: "",
  }));
  return (
    <GenericHomeSection color="white">
      <GenericContainer>
        <div className="chef-week-resturants-div">
          <div className="chef-of-week-title-div">
            <h2 className="spacing-1-25" style={{ textAlign: "left" }}>
              chef of the week:
            </h2>
          </div>
          <div className="chef-of-week-all-resturants-div">
            <PopularSwiper resturants={chefOfTheWeekRestaurants} />
          </div>
          <div className="all-chef-of-week-resturants-div">
            <a className="bold-link line-hight35" href="">
              All restaurants
            </a>

            <Button
              buttonClassName="transparant-background-button"
              imgClassName="icon"
              src={AllResturantsIcon}
              alt="AllResturantsIcon"
              onClick={() => {
                console.log("clicked");
              }}
            ></Button>
          </div>
        </div>
      </GenericContainer>
    </GenericHomeSection>
  );
};

export default ChefOfTheWeekRestaurants;
