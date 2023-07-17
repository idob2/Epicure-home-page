// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import ResturantCard from "../ResturantCard/ResturantCard";

const PopularSwiper = (props: { resturants: { imgUrl: string; name: string; chef?: string }[]}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1.5);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={15}
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
          ></ResturantCard>
        </SwiperSlide>
      ))}
    </Swiper>

  );
  
};

export default PopularSwiper;
