import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

const AdvertiseProduct = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
            <Link>
            <div className="bg-[url('/src/assets/musicProductBanner.png')] bg-no-repeat bg-center bg-cover h-[500px]"></div>
            </Link>
        </Container>
      </div>
    </>
  )
}

export default AdvertiseProduct
