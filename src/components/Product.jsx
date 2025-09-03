import React from 'react';
import Image from './Image';
import Heading from './Heading';
import PRODUCTONE from "/src/assets/productOne.png";
import { FaStar,FaRegEye  } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Product = ({productImage,productTitle,productDiscountPrice,productPrice,}) => {
  return (
    <>
      <div className="">
         <div className="relative">
                <Image imgSrc={productImage} />
                <Heading
                  text={productTitle}
                  tagName={"h4"}
                  className={"text-[16px] font-medium font-poppins py-2"}
                />
                <div className="flex gap-x-2 items-center">
                  <Heading
                    text={productDiscountPrice}
                    tagName={"h5"}
                    className={
                      "text-[16px] font-medium font-poppins text-[#DB4444]"
                    }
                  />
                  <Heading
                    text={productPrice}
                    tagName={"h5"}
                    className={
                      "text-[16px] font-medium font-poppins text-[#7D8184]"
                    }
                  />
                </div>
                <div className="flex items-center gap-1">
                  
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />
                  <FaStar className="text-[#FFAD33]" />

                  <span className="text-[#7D8184] text-sm">(65)</span>
                </div>
                <div className="absolute bottom-[270px] right-15 text-[24px]">
                 <CiHeart className="bg-white rounded-3xl p-1 mb-1"/>
                 <FaRegEye  className="bg-white rounded-3xl p-1 "/>
                </div>
              </div>
      </div>
    </>
  )
}

export default Product
