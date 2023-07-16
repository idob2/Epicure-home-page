import "./SignatureOfDishes.scss";
import DishSymbol from "../DishSymbol/DishSymbol";
import Symbols from "../../assets/symbols_icons/big_symbols/Symbols"
const SignatureDishes = () => {
  return (
    <div className="signature-main-div">
      <p className="signature-headline">Signature Dish Of:</p>
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
