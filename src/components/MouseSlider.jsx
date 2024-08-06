import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaStar,
  FaRupeeSign,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const NextArrow = (props) => {
  

  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black text-[30px] rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black text-[30px] rounded-full  absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const MouseSlider = () => {
  const navigate = useNavigate();
  const [mobileData,setMobileData]=useState([])
  
  useEffect(()=>{
    async function fetchData(){
     try {
       const {data}=await axios.get("https://reliance-digital-backend-1.onrender.com/api/v1/users/products?category=mouse")
       
       setMobileData(data)
     } catch (error) {
      console.log(error);
     }
    }
    fetchData()
  },[])
  return (
    <div className="container max-w-[95%] mx-auto bg-white mb-5">
      <p className="pl-2 py-5">
        Smartphone Bonanza | 10% upto Rs.3000 HDFC Instant Discount{" "}
        <span>View all</span>
      </p>
      <Slider {...settings}>
        {mobileData.map((mobile, index) => (
          <div key={index} className="px-4 group/item" onClick={()=>navigate(`/product-details/${mobile._id}`)}>
            <div className="bg-white   p-4 h-full flex flex-col">
              <div className="relative overflow-hidden group">
                <img
                  src={mobile.img}
                  alt={mobile.name}
                  className="w-1/2 rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold group-hover/item:text-[red] duration-100">
                  {mobile.name}
                </h3>
                <p className="text-gray-500">{mobile.color}</p>
                <p className="text-gray-500">{mobile.category}</p>
                <p className="text-gray-500">
                  Available: {mobile.available ? "Yes" : "No"}
                </p>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <p className="text-gray-500">{mobile.rating}</p>
                </div>
                <div className="flex items-center mt-auto">
                  <FaRupeeSign className="text-gray-900 mr-1" />
                  <p className="text-gray-900 font-bold">{mobile.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MouseSlider;
