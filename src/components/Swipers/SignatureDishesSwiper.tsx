// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import DishCard from "../DishCard/DishCard";
import { useState, useEffect } from "react";
import WindowResizeHelper from "../../utils/windowHelper";

const SignatureDishesSwiper = (props:{ dishes: { image: string, name: string, description: string, cost: string, type:string }[]}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.5);

  useEffect(() => {
    const windowResizeHelper = new WindowResizeHelper(900, 1.5, setSlidesPerView);

    return () => {
      windowResizeHelper.cleanup();
    };
  }, []);

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {props.dishes.map((dish) => (
        <SwiperSlide key={dish.image}>
          <DishCard
            image={dish.image}
            name={dish.name}
            description={dish.description}
            cost = { dish.cost}
            type= {dish.type}
          ></DishCard>
        </SwiperSlide>
      ))}
    </Swiper>
    

  );
};

export default SignatureDishesSwiper;
