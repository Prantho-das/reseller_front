'use client';
import ProductCard from '@/components/cards/ProductCard';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="product-details-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="common-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">category name</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      product name
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="product-details-slider-parent">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="product-details-description">
                <h1>Stilettos women shoes</h1>

                <h5>Price: 580 </h5>
                <div className="select-size">
                  <h6>size : </h6>
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        7
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        8
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        9
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="select-color">
                  <h6>Color : </h6>

                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="#"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"></a>
                    </li>
                  </ul>
                </div>
                <div className="quantity-flex">
                  <div className="quantity-box">
                    <div className="form-group">
                      <div className="decrement">
                        <button className="btn decrement-btn">
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                      <input type="text" className="form-control" value={20} />
                      <div className="increment">
                        <button className="btn increment-btn">
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="available-box">
                    <h5>(4 available)</h5>
                  </div>
                </div>
                <div className="total-price">total price: 1600 tk</div>
                <div className="price-flex">
                  <div className="title"> reseller price : </div>
                  <div className="input-box">
                    <input type="text" className="form-control" value={20} />
                  </div>
                </div>
                <div className="price-flex">
                  <div className="title"> commision : </div>
                  <div className="input-box">
                    <input type="text" className="form-control" value={20} />
                  </div>
                </div>
                <div className="all-btn-flex">
                  <button className="btn addtocart-btn">Add to cart</button>
                  <button className="btn share-btn">
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                  <button className="btn download-btn">
                    <i className="fa-solid fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details-description-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="description-box">
                <h3>Description</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum . Contrary to popular belief, Lorem Ipsum
                  is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum Contrary
                  to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
                <ul>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relate-product-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="common-title-shape">
                <h3>related products</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
              >
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
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
