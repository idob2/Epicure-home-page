import SearchIcon from "../../assets/nav_bar_images/Group.svg";
const SearchBar = (props: any) => {
  return (
    <div className="search-bar">
      <img className="search-img" src={SearchIcon} alt="Hamburg" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for restaurant cuisine, chef"
      />
    </div>
  );
};
export default SearchBar;
