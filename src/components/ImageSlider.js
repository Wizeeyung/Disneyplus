import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './css/home.css'
import s1 from './asset/slider-scales.jpg'
import s2 from './asset/slider-scale.jpg'
import s3 from './asset/slider-badging.jpg'

const ImageSlider = () => {
  let settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Slider {...settings} >
      <div className='slider'>
        <div>
          <img src={s1} alt='bg1' className='carousel-img' />
        </div>
        <div>
          <img src={s2} alt='bg1' className='carousel-img'/>
        </div>
        <div>
          <img src={s3} alt='bg1' className='carousel-img'/>
        </div>
      </div>

    </Slider>
  )
}

export default ImageSlider