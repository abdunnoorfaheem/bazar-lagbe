import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import Image from "../Image";
import ARROW from "/src/assets/arrow.png";
import PHONE from "/src/assets/phone.png";
import COMPUTER from "/src/assets/computer.png";
import WATCH from "/src/assets/watch.png";
import CAMERA from "/src/assets/camera.png";
import HEADPHONE from "/src/assets/headphone.png";
import GAMING from "/src/assets/gaming.png";

const BrowseCategory = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container className={"border-b-2 border-[#F5F5F5] pb-[95px]"}>
            <Flex className={"justify-between"}>
                <div className="">
                    <div className="flex items-center gap-x-4">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
                     <Heading text={"Categories"} tagName={"h4"} className={"text-[16px] font-semibold font-poppins text-[#DB4444] "}/>   
                    </div>
                    <Heading text={"Browse By Category"} tagName={"h3"} className={"text-[36px] font-semibold font-inter mt-[20px]"}/>
                </div>
                <div className="">
                   <Image imgSrc={ARROW}/>
                </div>
            </Flex>
            <Flex className={"justify-between py-[30px]"}>
                <div className="">
                    <Image imgSrc={PHONE}/>
                </div>
                <div className="">
                    <Image imgSrc={COMPUTER}/>
                </div>
                <div className="">
                    <Image imgSrc={WATCH}/>
                </div>
                <div className="">
                    <Image imgSrc={CAMERA}/>
                </div>
                <div className="">
                    <Image imgSrc={HEADPHONE}/>
                </div>
                <div className="">
                    <Image imgSrc={GAMING}/>
                </div>
            </Flex>
        </Container>
      </div>
    </>
  );
};

export default BrowseCategory;
