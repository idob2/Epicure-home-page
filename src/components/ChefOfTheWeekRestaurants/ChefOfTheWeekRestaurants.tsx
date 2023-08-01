import "./ChefOfTheWeekRestaurants.scss";
import { getAllChefRestaurants } from "../../api/api";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import ChefOfTheWeekRestaurantsSweeper from "../Swipers/ChefOfTheWeekRestaurantsSweeper";
import { restaurantImageMap } from "../../assets/resturantImages/index";
const ChefOfTheWeekRestaurants = (props: { name: string; chefId: string }) => {
  const [chefName, setChefName] = useState("chef of the week:");
  const [chefRestaurants, setChefRestaurants] = useState<
    {
      name: string,
      image: string,
      chef: string,
      dishes: string[],
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const allChefRestaurants = await getAllChefRestaurants(props.chefId);
      const restaurants: {
        name: string;
        image: string;
        chef: string;
        dishes: string[];
      }[] =  allChefRestaurants.map((restaurant: {
        name: string;
        image: string;
        chef: string;
        dishes: string[];
      }) => {
        const restaurantObject = {
          name: restaurant.name,
          image: restaurantImageMap[restaurant.image],
          chef: restaurant.chef,
          dishes: restaurant.dishes,
        };
        return restaurantObject;
      });
      
      setChefRestaurants(restaurants);
    };
    fetchData();

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


  return (
    <div className="chef-week-resturants-div">
      <div className="chef-of-week-title-div">
        <h2 className="chef-name spacing-1-25" style={{ textAlign: "left" }}>
          {chefName}
        </h2>
      </div>
      <div className="chef-of-week-all-resturants-div small-margin-div">
        <ChefOfTheWeekRestaurantsSweeper
          resturants={chefRestaurants}
        />
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
