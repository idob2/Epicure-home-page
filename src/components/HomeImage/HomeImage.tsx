import "./HomeImage.scss";
import HomePageImage from "../../assets/general_images/hero-picture 1.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useContext, useState } from "react";
// import { SearchContext } from "../context/SearchContext";
const HomeImage = () => {
  // const [dataFromSearch, setDataFromSearch] = useState([[''], [''], ['']]);
  // const contextValue = {
  //   setDataFromSearch: setDataFromSearch,
  // };

  // const updateDataFromSearch = (data : [any[], any[], any[]]) => {
  //   setDataFromSearch(data);
  // }
  return (
    // <SearchContext.Provider value={{setDataFromSearch: updateDataFromSearch} }>
    <div className="image-div">
      <div className="search-div">
        <div className="inner-search-div">
          <h2 className="image-div-title align-text-center">
            Epicure works with the top chef restaurants in Tel Aviv
          </h2>
          <SearchBar></SearchBar>
        </div>
      </div>

      <img className="home-image" src={HomePageImage} alt="" />
    </div>
    // </SearchContext.Provider>

  );
};

export default HomeImage;
