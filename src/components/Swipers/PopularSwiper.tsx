// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import ResturantCard from "../ResturantCard/ResturantCard";
import WindowResizeHelper from "../../utils/windowHelper";

const PopularSwiper = (props: { resturants: { imgUrl: string; name: string; chef?: string, rating?: string }[]}) => {
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
        <SwiperSlide key={resturant.imgUrl}>
          <ResturantCard
            imgUrl={resturant.imgUrl}
            name={resturant.name}
            chef={resturant.chef ? resturant.chef : ""}
            rating={resturant.rating ? resturant.rating : ""}
          ></ResturantCard>
        </SwiperSlide>
      ))}
    </Swiper>

  );
  
};

export default PopularSwiper;
