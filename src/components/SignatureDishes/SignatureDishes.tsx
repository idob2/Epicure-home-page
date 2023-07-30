import AllResturantsIcon from "../../assets/general_images/AllResturants.svg";
import "./SignatureDishes.scss";
import SignatureDishesSwiper from "../Swipers/SignatureDishesSwiper";
import Button from "../Button/Button";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import { useState, useEffect } from "react";
import { getAllDishes } from "../../api/api";

import { dishesMap } from "../../assets/dishes/index";

const SignatureDishes = () => {
  const [dishes, setDishes] = useState<
    {
      image: string;
      name: string;
      description: string;
      cost: string;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const dishesList = await getAllDishes();
      const dishes: {
        image: string;
        name: string;
        description: string;
        cost: string;
        type: string;
      }[] = [];

      dishesList.forEach(
        async (dish: {
          image: string;
          name: string;
          ingredients: string;
          price: string;
          tags: string;
        }) => {
          const restaurantObject = {
            image: dishesMap[dish.image],
            name: dish.name,
            description: dish.ingredients,
            cost: dish.price,
            type: dishesMap[dish.tags],
          };

          dishes.push(restaurantObject);
        }
      );

      setDishes(dishes);
    };
    fetchData();
  }, []);
  return (
    <GenericHomeSection className="margin-div" color="white">
      <div className="signature-dish-title-div">
        <h2>Signature Dishes of:</h2>
      </div>
      <div className="small-margin-div">
        <SignatureDishesSwiper dishes={dishes} />
      </div>
      <div className="all-signature-dishes-div small-margin-div">
        <a className="bold-link line-hight35" href="">
          All Restaurants
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

export default SignatureDishes;
