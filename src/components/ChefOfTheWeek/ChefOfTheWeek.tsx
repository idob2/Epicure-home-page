import ChefCard from "../ChefCard/ChefCard";
import { chefImageMap } from "../../assets/chefs_images/Chefs";
import { getAllChefs } from "../../api/api";
import "./ChefOfTheWeek.scss";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";
import ChefOfTheWeekRestaurants from "../ChefOfTheWeekRestaurants/ChefOfTheWeekRestaurants";
import { useEffect, useState } from "react";
const ChefOfTheWeek = () => {
  const [chefOfTheWeek, setChefOfTheWeek] = useState<{
    _id: string;
    image: string;
    name: string;
    description: string;
    restaurants: [];
  }>({
    _id: "",
    image: "",
    name: "",
    description: "",
    restaurants: [],
  });

  const fetchData = async () => {
    const chefList = await getAllChefs();
    const selectedChef = chefList[0];

    const chefData: {
      _id: string;
      image: string;
      name: string;
      description: string;
      restaurants: [];
    } = {
      _id: selectedChef._id,
      image: chefImageMap[selectedChef.image],
      name: selectedChef.name,
      description: selectedChef.description,
      restaurants: selectedChef.restaurants,
    };
    setChefOfTheWeek(chefData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GenericHomeSection className="margin-div" color="white">
      <div className="chef-of-the-week-div">
        <div className="chef-of-the-week-title-div">
          <h2 className="chef-of-the-week-headline"> Chef of the week: </h2>
        </div>
        <div className="small-margin-div">
          <ChefCard chef={chefOfTheWeek}></ChefCard>
        </div>
      </div>
      {chefOfTheWeek._id ?
      (<ChefOfTheWeekRestaurants
          name={chefOfTheWeek.name}
          chefId={chefOfTheWeek._id}
        ></ChefOfTheWeekRestaurants>
      ):<div></div>}
    </GenericHomeSection>
  );
};

export default ChefOfTheWeek;
