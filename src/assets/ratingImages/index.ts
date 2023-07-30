import FiveStars from './five_star_rating.svg';
import FourStars from './four_star_rating.svg';
import ThreeStars from './three_star_rating.svg';
import TwoStars from './two_star_rating.svg';
import OneStar from './one_star_rating.svg';


interface RestaurantsRating {
    [key: string]: string;
  }
  
  const restaurantsRatingMap: RestaurantsRating = {
    'five-stars': FiveStars,
    'four-stars': FourStars,
    'three-stars': ThreeStars,
    'two-stars': TwoStars,
    'one-star': OneStar,
  };
  
  export {restaurantsRatingMap};
