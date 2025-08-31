import React from "react";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import { FaSearch,FaRegHeart  } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgSrc={Logo} />
            </div>
            <div className="">
              <ul className="flex gap-x-12 font-poppins">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link>Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-6">
               <div className="relative">
                 <input type="text" placeholder="What are you looking for?" className="bg-[#F5F5F5] py-[12px] px-[20px] w-[243px] text-[12px] font-poppins outline-0" />
                <FaSearch className="absolute top-1/2 right-0 -translate-[50%] text-[24px]"/>
               </div>
                <div className="flex items-center gap-x-6 text-[32px]">
                    <FaRegHeart/>
                    <BsCart3/>
                </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
