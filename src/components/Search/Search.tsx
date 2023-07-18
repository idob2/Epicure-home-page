import ExitFromMenu from "../../assets/general_images/General.svg";
import { Zoom } from "react-awesome-reveal";
import "./Search.scss";
import SearchBar from "../SearchBar/SearchBar";
import "../../assets/styles/boxStyles.scss";
import GenericContainer from "../GenericContainer/GenericContainer";

const Search = (props: any) => {
  return (
    <div className="fade-container">
      <Zoom>
        <div className="search-page box-shadow">
          <button className="exit-button" onClick={props.handleSearchClick}>
            <img className="exit-img" src={ExitFromMenu} alt="Exit" />
          </button>
          <div className="search-div">
            <SearchBar></SearchBar>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Search;
