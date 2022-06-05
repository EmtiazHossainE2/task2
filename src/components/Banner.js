import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-[url('https://i.ibb.co/H4D8BLG/img1.jpg')] bg-cover">
            <div className="w-70 md:h-[90vh] h-[80vh] flex justify-center items-center">
              <Fade top>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Advanced features. <br /> Environment friendly.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[url('https://i.ibb.co/SxNNYMk/img2.jpg')] bg-cover">
            <div className="w-70 md:h-[90vh] h-[80vh] flex justify-center items-center">
              <Fade top>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/SfJvM8P/img3.jpg')] bg-cover">
            <div className="md:h-[90vh] h-[80vh] flex justify-center items-center">
              <Fade top>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Drive the future,
                    <br />
                    today.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
