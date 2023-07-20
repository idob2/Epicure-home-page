import "./SignatureOfDishes.scss";
import DishSymbol from "../DishSymbol/DishSymbol";
import Symbols from "../../assets/symbols_icons/big_symbols/Symbols";
import GenericHomeSection from "../GenericHomeSection/GenericHomeSection";

const SignatureDishes = () => {
 
  return (
    <GenericHomeSection className="margin-div" color="#fafafa">
        <div className="signature-main-div">
          <h2>THE MEANING OF OUR ICONS:</h2>
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
