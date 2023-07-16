// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import DishCard from "../DishCard/DishCard";

const SignatureDishesSwiper = (props:{ dishes: { image: string, name: string, description: string, cost: string }[]}) => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {props.dishes.map((resturant) => (
        <SwiperSlide key={resturant.image}>
          <DishCard
            image={resturant.image}
            name={resturant.name}
            description={resturant.description}
            cost = { resturant.cost}
          ></DishCard>
        </SwiperSlide>
      ))}
    </Swiper>
    

  );
};

export default SignatureDishesSwiper;
