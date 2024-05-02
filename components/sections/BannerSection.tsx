"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
const BannerSection = () => {
  return (
    <>
      <section className="banner_section">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner_image_wrapper">
            <Image src="/assets/img/banner-1.jpeg" alt="" fill/>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="d-flex w-100 text-center flex-wrap">
          <div className="support_box_wrapper">
            <div className="support-box">
              <div className="icon-box">
                <img
                  src="/assets/images/icon/online-shopping.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="content-box">
                <h3 className="title">shop with confidence</h3>
                <p>
                  our buyer protection covers your purchase from click to
                  delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="support_box_wrapper">
            <div className="support-box">
              <div className="icon-box">
                <img
                  src="/assets/images/icon/safety.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="content-box">
                <h3 className="title">safe payment</h3>
                <p>
                  pay with the world's most popular and secure payments methods.
                </p>
              </div>
            </div>
          </div>
          <div className="support_box_wrapper">
            <div className="support-box">
              <div className="icon-box">
                <img
                  src="/assets/images/icon/fast-delivery.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="content-box">
                <h3 className="title">delivery</h3>
                <p>Ensure fastest and secure delivery</p>
              </div>
            </div>
          </div>
          <div className="support_box_wrapper">
            <div className="support-box">
              <div className="icon-box">
                <img
                  src="/assets/images/icon/currency.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="content-box">
                <h3 className="title">great value</h3>
                <p>
                  we offer competative prices on hour 30 thousand plus product
                  range.
                </p>
              </div>
            </div>
          </div>
          <div className="support_box_wrapper">
            <div className="support-box">
              <div className="icon-box">
                <img
                  src="/assets/images/icon/currency.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="content-box">
                <h3 className="title">great value</h3>
                <p>
                  we offer competative prices on hour 30 thousand plus product
                  range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
