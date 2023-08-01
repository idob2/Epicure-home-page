import Claro from './claro.svg';
import Lumina from './Lumina.svg';
import TigerLily from './tiger-lily.svg';
import KabKem from './Kab kem.svg';
import Messa from './Messa.svg';
import NitanThai from './NitanThai.svg';
import YaPan from './YaPan.svg';
import Onza from './onza.svg';



interface RestaurantImages {
    [key: string]: string;
  }
  
  const restaurantImageMap: RestaurantImages = {
    claro: Claro,
    lumina: Lumina,
    'tiger-lily': TigerLily,
    'kab-kem': KabKem,
    messa: Messa,
    'nitan-thai': NitanThai,
    'ya-pan': YaPan,
    'onza': Onza
  };
  
  export {restaurantImageMap};
