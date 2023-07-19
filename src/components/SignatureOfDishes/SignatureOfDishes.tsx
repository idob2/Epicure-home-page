import "./SignatureOfDishes.scss";
import DishSymbol from "../DishSymbol/DishSymbol";
import Symbols from "../../assets/symbols_icons/big_symbols/Symbols";
import { useState, useEffect } from "react";
import GenericContainer from "../GenericContainer/GenericContainer";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";

const SignatureDishes = () => {
  const [signatureHeadLine, setsignatureHeadLine] =
    useState("Signature Dish Of:");
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
    <GenericHomeSection className="margin-div" color="#fafafa">
        <div className="signature-main-div">
          <h2>{signatureHeadLine}</h2>
          <div className="signature-symboles">
            {Symbols.map((dishSymbol: { icon: string; name: string }) => (
              <DishSymbol
                key={dishSymbol.icon}
                icon={dishSymbol.icon}
                name={dishSymbol.name}
              ></DishSymbol>
            ))}
          </div>
        </div>
    </GenericHomeSection>
  );
};

export default SignatureDishes;
