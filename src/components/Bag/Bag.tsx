import { useState } from "react";
import BagIcon from "../../assets/nav_bar_images/Property 1=Bag.svg";
import { Slide } from "react-awesome-reveal";
import "./Bag.scss";
const Bag = () => {
  const [bagItems, insertBagItem] = useState([]);

  return (
    <div className="fade-container-bag">
      <Slide>
        <div className="shopping-bag-div">
          <div className="bag-container">
            <img className="bag-image" src={BagIcon} alt="Bag Icon" />
            {bagItems.length === 0 && (
              <span className="card-input upper-case break-word align-text-center">
                your bag is <br /> empty
              </span>
            )}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Bag;
