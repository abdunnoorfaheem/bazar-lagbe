import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
    const {onClick } = props;
  return (
    <>
      <div
      className="text-2xl"
      
      onClick={onClick}
    ><FaArrowRight className='absolute top-1/2 right-5 -translate-1/2 bg-gray-400 rounded-3xl'/></div>
    </>
  )
}

export default NextArrow;
