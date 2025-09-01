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
  };
  return (
    <>
      <Container>
        <Flex className={"justify-between"}>
          <div className="w-[30%]">
            <ul className="text-[16px] font-poppins">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="w-[67%]">
            <Slider {...settings}>
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
    </>
  );
};

export default Banner;
