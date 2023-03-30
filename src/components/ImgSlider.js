import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import slide_1 from "../assets/images/slider-badag.jpg";
import slide_2 from "../assets/images/slider-badging.jpg";
import slide_3 from "../assets/images/slider-scale.jpg";
import slide_4 from "../assets/images/slider-scales.jpg";

export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      img: slide_1,
      alt: "Home slide 1",
    },
    {
      img: slide_2,
      alt: "Home slide 2",
    },
    {
      img: slide_3,
      alt: "Home slide 3",
    },
    {
      img: slide_4,
      alt: "Home slide 4",
    },
  ];

  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <SlideItem>
          <img src={slide.img} alt={slide.alt} />
        </SlideItem>
      ))}
    </Slider>
  );
}

const SlideItem = styled.div`
  width: 100%;
`;
