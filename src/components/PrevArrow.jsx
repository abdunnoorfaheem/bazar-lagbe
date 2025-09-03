import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = (props) => {
     const {  onClick } = props;
  return (
    <>
        <div
      className="text-2xl "
      
      onClick={onClick}
    ><FaArrowLeft className='bg-gray-500 rounded-3xl absolute top-1/2 left-5 -translate-1/2 z-10'/></div>
    </>
  )
}

export default PrevArrow
