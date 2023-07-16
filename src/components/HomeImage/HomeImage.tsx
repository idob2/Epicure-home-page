import "./HomeImage.scss";
import HomePageImage from "../../assets/general_images/hero-picture 1.svg";
import SearchBar from "../SearchBar/SearchBar";
const HomeImage = (props: any) => {
    return (
      <div className="image-div">
        <div className="search-div">
            <p>Epicure works with the top chef restaurants in Tel Aviv</p>
            <SearchBar></SearchBar>
        </div>
       <img className="home-image" src={HomePageImage} alt="" />
      </div>
    );
  };
  
  export default HomeImage;