import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
      <button className={`bg-[#DB4444] text-white text-[16px] font-medium font-poppins rounded-[10px] ${className}`}>{children}</button>
    </>
  )
}

export default Button
