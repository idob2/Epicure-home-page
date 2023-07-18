import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import CompleteNavBar from "../CompleteNavBar/CompleteNavBar";
import HomeImage from "../HomeImage/HomeImage";
import SignatureDishes from "../SignatureDishes/SignatureDishes";
import PopularRestaurants from "../PopularRestaurants/PopularRestaurants";
import SignatureOfDishes from "../SignatureOfDishes/SignatureOfDishes";
import ChefOfTheWeekRestaurants from "../ChefOfTheWeekRestaurants/ChefOfTheWeekRestaurants";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import TempComponent from "../TempComponent/TempComponent";

const EpicurePage = () => {
  return (
    <div>
      <HomeImage></HomeImage>

      <PopularRestaurants></PopularRestaurants>

      <SignatureDishes></SignatureDishes>

      <SignatureOfDishes></SignatureOfDishes>
      <ChefOfTheWeek></ChefOfTheWeek>
      
      <ChefOfTheWeekRestaurants></ChefOfTheWeekRestaurants>
      <AboutUs></AboutUs>
      
    </div>
  );
};

export default EpicurePage;
