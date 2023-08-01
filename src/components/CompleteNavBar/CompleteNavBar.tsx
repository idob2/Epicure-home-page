import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu";
import Bag from "../Bag/Bag";
import Search from "../Search/Search";

const CompleteNavBar = () => {
  const [isMenuSelected, setIsMenuSelected] = useState(false);
  const [isSearchSelected, setIsSearchSelected] = useState(false);
  const [isBagSelected, setIsBegSelected] = useState(false);

  const handleMenuClick = () => {
    setIsSearchSelected(false);
    setIsBegSelected(false);
    isMenuSelected ? setIsMenuSelected(false) : setIsMenuSelected(true);
  };

  const handleSearchClick = () => {
    setIsMenuSelected(false);
    setIsBegSelected(false);
    isSearchSelected ? setIsSearchSelected(false) : setIsSearchSelected(true);
  };

  const handleBagClick = () => {
    isBagSelected ? setIsBegSelected(false) : setIsBegSelected(true);
  };

  return (
    <div>
      {isMenuSelected ? <Menu handleMenuClick={handleMenuClick}></Menu> :
      isSearchSelected ? <Search handleSearchClick={handleSearchClick}></Search> :
        <NavBar
          handleMenuClick={handleMenuClick}
          handleSearchClick={handleSearchClick}
          handleBagClick={handleBagClick}
        ></NavBar>
      }
      {isBagSelected && <Bag></Bag>}    
    </div>
  );
};

export default CompleteNavBar;
