import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import CompleteNavBar from "../CompleteNavBar/CompleteNavBar";
import HomeImage from "../HomeImage/HomeImage";
import SignatureDishes from "../SignatureDishes/SignatureDishes";
import PopularResturants from "../PopularResturants/PopularResturants";
import SignatureOfDishes from "../SignatureOfDishes/SignatureOfDishes";
import ChefOfTheWeekRestaurants from "../ChefOfTheWeekRestaurants/ChefOfTheWeekRestaurants";
import AboutUs from "../AboutUs/AboutUs";

const EpicurePage = () => {
  return (
    <div>
      <CompleteNavBar></CompleteNavBar>
      <HomeImage></HomeImage>
      <PopularResturants></PopularResturants>
      <SignatureDishes></SignatureDishes>
      <SignatureOfDishes></SignatureOfDishes>
      <ChefOfTheWeek></ChefOfTheWeek>
      <ChefOfTheWeekRestaurants></ChefOfTheWeekRestaurants>
      <AboutUs></AboutUs>
    </div>
  );
};

export default EpicurePage;
