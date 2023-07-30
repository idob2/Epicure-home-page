import PopularSwiper from "../Swipers/PopularSwiper";
import {restaurantImageMap} from "../../assets/resturantImages/index";
import {restaurantsRatingMap} from "../../assets/ratingImages/index";
import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./PopularRestaurants.scss";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import {getAllRestaurants, getChefOfRestaurant} from "../../api/api";

const PopularRestaurants = () => {
  const [restaurantsWithChefData, setRestaurantsWithChefData] = useState<{ imgUrl: string; name: string; chef: string; rating: string; }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const restaurantsList = await getAllRestaurants();
      const restaurantsWithChefData: { imgUrl: string; name: string; chef: string; rating: string; }[] = [];

      await Promise.all(
        restaurantsList.map(async (restaurant: { _id: string; image: any; name: any; ranking: any; }) => {

          const chef =  await getChefOfRestaurant(restaurant._id);

          const restaurantObject = {
            imgUrl: restaurantImageMap[restaurant.image],
            name: restaurant.name,
            chef: chef.name,
            rating: restaurantsRatingMap[restaurant.ranking],
          };

          restaurantsWithChefData.push(restaurantObject);
        })
      );

      setRestaurantsWithChefData(restaurantsWithChefData);
    };

    fetchData();
  }, []); 

  return (
    <GenericHomeSection className="margin-div" color="white">
        <div className="title-div">
          <h2 className="spacing-1-25">popular restaurant in epicure:</h2>
        </div>
        <div className="small-margin-div">
          <PopularSwiper resturants={restaurantsWithChefData} />
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
    </GenericHomeSection>
  );
};

export default PopularRestaurants;
