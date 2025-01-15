import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MySwiper({ data }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5} // Puoi modificare questo valore per controllare quante slide si vedono
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {item.title}
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
