import ChefCard from "../ChefCard/ChefCard";
import Chefs from "../../assets/chefs_images/Chefs";
import "./ChefOfTheWeek.scss";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import ChefOfTheWeekRestaurants from "../ChefOfTheWeekRestaurants/ChefOfTheWeekRestaurants";
const ChefOfTheWeek = () => {
  return (
    <GenericHomeSection className="margin-div" color="white">
        <div className="chef-of-the-week-div">
          <div className="chef-of-the-week-title-div">
            <h2 className="chef-of-the-week-headline"> Chef of the week: </h2>
          </div>
          <div className="small-margin-div">
          <ChefCard chef={Chefs.Yossi}></ChefCard>
          </div>
        </div>
        <ChefOfTheWeekRestaurants name="Yossi"></ChefOfTheWeekRestaurants>
    </GenericHomeSection>
  );
};

export default ChefOfTheWeek;
