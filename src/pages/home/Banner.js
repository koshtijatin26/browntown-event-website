import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BannerImg from "../../assets/images/resources/main-slider-img-1-1.jpg";
import BannerShape1 from "../../assets/images/shapes/main-slider-shape-1.png";
import BannerShape2 from "../../assets/images/shapes/main-slider-shape-2.png";
import BannerShape3 from "../../assets/images/shapes/main-slider-star-1.png";
import BannerShape4 from "../../assets/images/shapes/main-slider-star-2.png";
import BannerShape5 from "../../assets/images/shapes/main-slider-star-3.png";

export default function Banner() {
  return (
    <section id="th-home" className="main-slider">
      <Swiper slidesPerView={1} loop={false} autoplay={false}>
        <SwiperSlide>
          <div className="main-slider__img">
            <img src={BannerImg} alt="Main Banner" />
          </div>
          <div className="main-slider__shpae-1">
            <img src={BannerShape1} alt="Shape 1" />
          </div>
          <div className="main-slider__shpae-2">
            <img src={BannerShape2} alt="Shape 2" />
          </div>
          <div className="main-slider__start-1">
            <img src={BannerShape3} alt="Star 1" />
          </div>
          <div className="main-slider__start-2 zoominout">
            <img src={BannerShape4} alt="Star 2" />
          </div>
          <div className="main-slider__start-3">
            <img src={BannerShape5} alt="Star 3" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">Music Festival</p>
                  <h2 className="main-slider__title">
                    Discover a World <br /> <span>of Celebration</span>
                  </h2>
                  <p className="main-slider__text">
                    Design is a multifaceted field that encompasses various
                    elements.
                  </p>
                  {/* <ul className="list-unstyled main-slider__address">
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <div className="text">
                        <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>10 Am To 10 Pm 20 April 2024</p>
                      </div>
                    </li>
                  </ul> */}
                  <div className="main-slider__btn-box mt-3">
                    <Link to="/contact-us" className="main-slider__btn thm-btn">
                      Purchase Ticket
                      <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
