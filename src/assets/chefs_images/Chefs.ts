import Yossi from "./YossiShitrit.png";
import Assaf from "./AssafGranit.png";
import Eyal from "./EyalShani.png";
import Aviv from "./AvivMoshe.png";

interface ChefImages {
    [key: string]: string;
  }
  
  const chefImageMap: ChefImages = {
    "Yossi": Yossi,
    "Assaf": Assaf,
    "Aviv": Aviv,
    "Eyal": Eyal
  };
  
export {chefImageMap};
