import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import CompleteNavBar from "../CompleteNavBar/CompleteNavBar";
import HomeImage from "../HomeImage/HomeImage";
import SignatureDishes from "../SignatureDishes/SignatureDishes";
import PopularRestaurants from "../PopularRestaurants/PopularRestaurants";
import SignatureOfDishes from "../SignatureOfDishes/SignatureOfDishes";
import AboutUs from "../AboutUs/AboutUs";

const EpicurePage = () => {
  return (
    <div>
      <HomeImage/>

      <PopularRestaurants></PopularRestaurants>

      <SignatureDishes></SignatureDishes>

      <SignatureOfDishes></SignatureOfDishes>
      <ChefOfTheWeek></ChefOfTheWeek>
      <AboutUs></AboutUs>
      
    </div>
  );
};

export default EpicurePage;
