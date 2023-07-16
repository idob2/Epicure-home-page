import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import CompleteNavBar from "../CompleteNavBar/CompleteNavBar";
import HomeImage from "../HomeImage/HomeImage";
import SignatureDishes from "../SignatureDishes/SignatureDishes";
import PopularResturants from "../PopularResturants/PopularResturants";
import SignatureOfDishes from "../SignatureOfDishes/SignatureOfDishes";

const EpicurePage = () => {
  return (
    <div>
      <CompleteNavBar></CompleteNavBar>
      <HomeImage></HomeImage>
      <PopularResturants></PopularResturants>
      <SignatureDishes></SignatureDishes>
      <SignatureOfDishes></SignatureOfDishes>
      <ChefOfTheWeek></ChefOfTheWeek>
    </div>
  );
};

export default EpicurePage;
