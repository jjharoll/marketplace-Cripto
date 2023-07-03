import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import live1 from "../../assets/live1.png";
import live2 from "../../assets/live2.png";
import live3 from "../../assets/live3.png";
import live4 from "../../assets/live4.png";
import livem1 from "../../assets/livem1.png";
import livem2 from "../../assets/livem2.png";
import livem3 from "../../assets/livem3.png";
import livem4 from "../../assets/livem4.png";
import './LiveAuctions.css'

const LiveAuctions = () => {
  return (
    <div className="max-w-[1410px] mx-auto px-5 py-12">
        <div className="flex flex-col items-center pb-8">
            <h2 className="text-center font-bold text-2xl">LIve Auctions</h2>
            <div className=" w-14 h-0.5 bg-[#5228e2]"></div>
        </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper py-10"
        >
          <SwiperSlide>
            <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live1} className="w-full" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem1} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">SalvadorDali</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live2} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Triumphant Awakening...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem2} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">Trista Francis</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live3} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Living Vase 01 by Lanza...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem3} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">Freddie Carpenter</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live4} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Flame Dress' by Balmain...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem4} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">Tyler Covington</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live1} className="w-full" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Hamlet Contemplates...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem1} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">SalvadorDali</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="customShadow p-3 rounded-2xl">
              <div className="">
                <img src={live2} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="font-bold text-lg">"Triumphant Awakening...</h2>
                <p className="bg-[#5228e2] text-white px-2 font-bold rounded-full">
                  BSC
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                <img src={livem2} className="rounded-lg" alt="" />
                  <div>
                    <p className="text-gray-500">Creator</p>
                    <h5 className="font-bold text-lg">Trista Francis</h5>
                  </div>
                </div>
                  <div>
                    <p className="text-gray-500">Current Bid</p>
                    <h5 className="font-bold text-lg">4.89 ETH</h5>
                  </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LiveAuctions;
