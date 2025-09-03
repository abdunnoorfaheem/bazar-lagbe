import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Button from "../Button";
import Image from "../Image";
import Product from "../Product";

import {useState,useEffect} from "react";
import axios from "axios";


const BestSellProduct = () => {

    let [allData,setAllData]=useState([]);
    
    useEffect(() => {

      async  function viewData(){

        let data =await axios.get('https://dummyjson.com/products');

        setAllData(data.data.products);
        

        }
        viewData();
      
    }, []);
    

  return (
    <>
      <div className="py-[20px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <div className="flex items-center gap-x-4">
                <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md"></div>
                <Heading
                  text={"This Month"}
                  tagName={"h4"}
                  className={
                    "text-[16px] font-semibold font-poppins text-[#DB4444] "
                  }
                />
              </div>
              <Heading
                text={"Best Selling Products"}
                tagName={"h3"}
                className={"text-[36px] font-semibold font-inter mt-[20px]"}
              />
            </div>
            <div className="">
              <Button className={"py-[16px] px-[48px]"}>View All</Button>
            </div>
          </Flex>
          <div className="py-[20px]">
            <Flex className={"justify-between flex-wrap"}>
             
             
               {
                allData.slice(0,4).map((item)=>(
                    <div className="w-[24%]">
                     <Product productImage={item.thumbnail} productTitle={item.title} productDiscountPrice={`$${item.price}`} productPrice={`${item.discountPercentage}%`}/>
                      </div>
                ))
               }
            
              
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSellProduct;
