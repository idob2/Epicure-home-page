import "./ChefOfTheWeekRestaurants.scss";
import PopularResturantsList from "../../assets/resturantImages/PopularResturans";
import PopularSwiper from "../Swipers/PopularSwiper";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import ChefOfTheWeekRestaurantsSweeper from "../Swipers/ChefOfTheWeekRestaurantsSweeper";
const ChefOfTheWeekRestaurants = (props: {name:string}) => {

  const [chefName, setChefName] = useState("chef of the week:");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setChefName(`${props.name}'s Restaurants`);
      } else {
        setChefName("chef of the week:");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const chefOfTheWeekRestaurants = PopularResturantsList.map((restaurant) => ({
    imgUrl: restaurant.imgUrl,
    name: restaurant.name,
    chef: "",
    rating: ""
  }));


  return (
        <div className="chef-week-resturants-div">
          <div className="chef-of-week-title-div">
            <h2 className="chef-name spacing-1-25" style={{ textAlign: "left" }}>
              {chefName}
            </h2>
          </div>
          <div className="chef-of-week-all-resturants-div small-margin-div">
            <ChefOfTheWeekRestaurantsSweeper resturants={chefOfTheWeekRestaurants} />
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
  );
};

export default ChefOfTheWeekRestaurants;
