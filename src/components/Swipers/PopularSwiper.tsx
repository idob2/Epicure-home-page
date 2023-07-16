// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ResturantCard from "../ResturantCard/ResturantCard";

const PopularSwiper = (props: { resturants: { imgUrl: string; name: string; chef: string }[]}) => {
  return (
    // <Swiper
    //   spaceBetween={15}
    //   slidesPerView={1.5}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper: any) => console.log(swiper)}
    // >
    //   {props.resturants.map((resturant) => (
    //     <SwiperSlide key={resturant.imgUrl}>
    //       <ResturantCard
    //         imgUrl={resturant.imgUrl}
    //         name={resturant.name}
    //         chef={resturant.chef}
    //       ></ResturantCard>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>

    <></>
  );
  
};

export default PopularSwiper;
