import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://www.reliancedigital.in/medias/True-Wireless-Ear-Buds-Slim-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMDMxMjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2hhYi8xMDE3Nzc1ODM2MzY3OC5qcGd8ODg1NWE3ZDE0YWY2NjdmNWY0ZDc3NTI4ZjA2MWVmZTYzNmJhNGU5NGI3ZTA3OWI4NWM4Y2ZlYmYyOTU1OGE1Yw",
  "https://www.reliancedigital.in/medias/Bring-the-party-home-slim-banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyMjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDlhL2g5MS8xMDE3NjQyMjkwMzgzOC5qcGd8Zjc3MzdiZWZmMTQ4YjQwMDFkNzMwNzBkMGU5OGZmM2M4ZWUwOTczZGEzNWRlMmJhMWI0NGQ0NTI4NWYyYzkyMw",
]
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      <FaArrowLeft className="p-2" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      <FaArrowRight className=" rounded-full p-2" />
    </div>
  );
};

const TwoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul
          style={{ display: "flex", justifyContent: "center", margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-full ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TwoSlider;
