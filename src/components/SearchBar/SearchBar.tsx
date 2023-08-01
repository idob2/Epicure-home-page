import { useContext, useState } from "react";
import SearchIcon from "../../assets/nav_bar_images/Group.svg";
import { getQueriedData } from "../../api/api";
// import { SearchContext } from "../context/SearchContext";


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  // const setDataFromSearch = useContext(SearchContext);
  // setDataFromSearch.setDataFromSearch([['ido'], [], []]);
  const search = async (searchValue: string) => {
    try {
      const allData = await getQueriedData(searchValue);
      console.log("Filtered data:", allData);
      setSearchOptions(allData);
    } catch (error) {
      console.error("Error filtering data:", error);
      setSearchOptions([]);
    }
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      if(event.target.value !== ''){
        search(event.target.value);
      }

    }
  };

  return (
    <div className="search-bar">
      <img className="search-img" src={SearchIcon} alt="Hamburg" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for restaurant cuisine, chef"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
export default SearchBar;
