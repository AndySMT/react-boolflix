import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";

export default function MySwiper({ data }) {
  return (
    <Swiper
      /* spaceBetween={10} */
      slidesPerView={6}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} style={{ padding: "10px" }}>
          <Card data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
