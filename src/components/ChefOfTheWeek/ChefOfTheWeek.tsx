import ChefCard from "../ChefCard/ChefCard";
import Chefs from "../../assets/chefs_images/Chefs";
import "./ChefOfTheWeek.scss";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
const ChefOfTheWeek = () => {
  return (
    <GenericHomeSection color="white">
      <GenericContainer>
        <div className="chef-of-the-week-div">
          <div className="chef-of-the-week-title-div">
            <h2 className="chef-of-the-week-headline"> Chef of the week: </h2>
          </div>
          <ChefCard chef={Chefs.Yossi}></ChefCard>
        </div>
      </GenericContainer>
    </GenericHomeSection>
  );
};

export default ChefOfTheWeek;
