import {PadKiMao, PadKiMao2, PadKiMao3, RedFarm, TaMaLaKo} from './dishesImages';
import {SpicyIcon, VeganIcon, VegeterianIcon} from '../symbols_icons/small_symbols/index';

interface dishesImages {
    [key: string]: string;
  }
  
  const dishesMap: dishesImages = {
    "Pad Ki Mao": PadKiMao,
    "Pad Ki Mao2": PadKiMao2,
    "Pad Ki Mao3": PadKiMao3,
    "Red Farm": RedFarm,
    "Ta La Ma Ko": TaMaLaKo,
    "spicy": SpicyIcon,
    "vegan": VeganIcon,
    "vegeterian": VegeterianIcon,
    "none": ""
  };
  
export {dishesMap};