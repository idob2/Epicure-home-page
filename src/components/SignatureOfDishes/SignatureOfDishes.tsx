import "./SignatureOfDishes.scss";
import DishSymbol from "../DishSymbol/DishSymbol";
import Symbols from "../../assets/symbols_icons/big_symbols/Symbols"
import { useState, useEffect } from "react";
const SignatureDishes = () => {

  const [signatureHeadLine, setsignatureHeadLine] = useState("Signature Dish Of:");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setsignatureHeadLine("THE MEANING OF OUR ICONS:");
      } else {
        setsignatureHeadLine("Signature Dish Of:");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="signature-main-div">
      <h2 className="signature-headline">{signatureHeadLine}</h2>
      <div className="signature-symboles">
        {Symbols.map((dishSymbol: {icon:string, name:string}) => (
          <DishSymbol
            key={dishSymbol.icon}
            icon={dishSymbol.icon}
            name={dishSymbol.name}
          ></DishSymbol>
        ))}
      </div>
    </div>
  );
};

export default SignatureDishes;
