import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './css/home.css'
import s1 from './asset/slider-scales.jpg'
import s2 from './asset/slider-scale.jpg'
import s3 from './asset/slider-badging.jpg'
import s4 from './asset/slider-badag.jpg'

const ImageSlide = () => {
  let settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className='slider'>
    <Slider {...settings} >
     
        <div className='sliderimg-wrap'>
          <img src={s1} alt='bg1' className='carousel-img' />
        </div>
        <div className='sliderimg-wrap'>
          <img src={s2} alt='bg1' className='carousel-img'/>
        </div>
        <div className='sliderimg-wrap'>
          <img src={s3} alt='bg1' className='carousel-img'/>
        </div>
        <div className='sliderimg-wrap'>
          <img src={s4} alt='bg1' className='carousel-img'/>
        </div>

    </Slider>
    </div>
  )
}

export default ImageSlide