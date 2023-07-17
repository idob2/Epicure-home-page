import { useState } from "react";
import BagIcon from "../../assets/nav_bar_images/Property 1=Bag.svg";
import "./Bag.scss";
const Bag = () => {
    const [bagItems, insertBagItem] = useState([]);

  return (
    <div className="shopping-bag-div">
        <div className="bag-container">
            <img className = "bag-image" src={BagIcon} alt="Bag Icon" />
            {bagItems.length === 0  && <span>your bag is <br /> empty</span>}
        </div>
      
    </div>
  );
};

export default Bag;
