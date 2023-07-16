import ChefCard from "../ChefCard/ChefCard";
import Chefs from "../../assets/chefs_images/Chefs";
import "./ChefOfTheWeek.scss";
const ChefOfTheWeek = () => {
  return (
    <div className="chef-of-the-week-div">
      <div className="chef-of-the-week-title-div">
        <p className="chef-of-the-week-headline"> Chef of the week: </p>
      </div>
      <ChefCard chef={Chefs.Yossi}></ChefCard>
    </div>
  );
};

export default ChefOfTheWeek;
