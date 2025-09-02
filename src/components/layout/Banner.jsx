import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import BannerIMG from "/src/assets/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-3">{dots}</ul>
      </div>
    ),
    customPaging: ()=> (
      <div
        className="
          w-3 h-3 
          rounded-full 
          bg-gray-500 
          hover:bg-red-500 
          transition-all
          absolute bottom-[50px]
        "
      ></div>
    )
  };
  return (
    <>
    <div className="border-t-2 border-[#1d1d1d50]">
       <Container className={"my-5"}>
        <Flex className={"justify-between"}>
          <div className="w-[30%]  border-r-2 border-[#1d1d1d50]">
            <ul className="text-[16px] font-poppins">
              <li className="py-2">Woman’s Fashion</li>
              <li className="py-2">Men’s Fashion</li>
              <li className="py-2">Electronics</li>
              <li className="py-2">Home & Lifestyle</li>
              <li className="py-2">Medicine</li>
              <li className="py-2">Sports & Outdoor</li>
              <li className="py-2">Baby’s & Toys</li>
              <li className="py-2">Groceries & Pets</li>
              <li className="py-2">Health & Beauty</li>
            </ul>
          </div>
          <div className="w-[67%]">
            <Slider {...settings} className="">
              <div>
                <Image imgSrc={BannerIMG} />
              </div>
              <div>
                <Image imgSrc={BannerIMG} />
              </div>
              <div>
                <Image imgSrc={BannerIMG} />
              </div>
              <div>
                <Image imgSrc={BannerIMG} />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </div>
     
    </>
  );
};

export default Banner;
