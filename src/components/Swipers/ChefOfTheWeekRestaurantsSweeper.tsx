// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import ChefOfTheWeekResturantCard from "../ChefOfTheWeekRestaurantCard/ChefOfTheWeekRestaurantCard";
import WindowResizeHelper from "../../utils/windowHelper";

const ChefOfTheWeekRestaurantsSweeper = (props: { resturants: { image: string; name: string; chef: string}[]}) => {
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
      {props.resturants.map((resturant) => (
        <SwiperSlide key={resturant.image}>
          <ChefOfTheWeekResturantCard
            imgUrl={resturant.image}
            name={resturant.name}
            chef={resturant.chef ? resturant.chef : ""}
          ></ChefOfTheWeekResturantCard>
        </SwiperSlide>
      ))}
    </Swiper>

  );
  
};

export default ChefOfTheWeekRestaurantsSweeper;
