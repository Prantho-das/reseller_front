"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../cards/ProductCard";

const TopSellingSection = () => {
  return (
    <>
      <section className="top_selling_section my-3">
        <div className="container-fluid">
          <h4>Top Selling</h4>
          <Swiper
            breakpoints={{
              1200: {
                slidesPerView:6,
              },
              1024: {
                slidesPerView:4
              },
              768: {
                slidesPerView:2
              },
            }}
            spaceBetween={20}
            navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TopSellingSection;
