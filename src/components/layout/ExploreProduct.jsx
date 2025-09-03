import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Image from '../Image';
import ARROW from "/src/assets/arrow.png"
import Product from '../Product';
import {useState,useEffect} from "react"; 
import axios from 'axios';

const ExploreProduct = () => {
    let [allData,setAllData]=useState([]);

    useEffect(() => {

       async function viewData(){
         let data =await axios.get('https://dummyjson.com/products');
         setAllData(data.data.products);
        }
        viewData();
      
    }, []);

  return (
    <>
      <div className="py-[50px]">
        <Container>
            <Flex className={"justify-between"}>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
                <Heading
                  text={"Our Products"}
                  tagName={"h4"}
                  className={
                    "text-[16px] font-semibold font-poppins text-[#DB4444] "
                  }
                />
              </div>
              <Heading
                text={"Explore Our Products"}
                tagName={"h3"}
                className={"text-[36px] font-semibold font-inter mt-[20px]"}
              />
            </div>
            <div className="">
              <Image imgSrc={ARROW}/>
            </div>
          </Flex>
          <div className="flex flex-wrap py-[20px]">
          
            {
                allData.map((item)=>(
                     <div className="w-[24%]">
                     <Product productImage={item.thumbnail} productTitle={item.title}productDiscountPrice={`${item.discountPercentage}%`} productPrice={`$${item.price}`}/>
                     </div>
                ))
            }
           
          </div>
        </Container>
      </div>
    </>
  )
}

export default ExploreProduct
