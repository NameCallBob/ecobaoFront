import React from 'react'
import { Container, Image } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/*** 
 * 食物類別選擇
 ***/
function FoodTypeSelect({setType,setWebaction}) {
    const {data: foodType} = useFetch("http://localhost:8002/foodType")
    // react-slick 設定專區
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }
    const handlerOnclick = (e) =>{
    setType(e.target.alt)
    setWebaction('type')
    }
  return (
    <div className='food-type-container'>
        <h4>餐點類別</h4>
        <div>
            <div className='food-type-list'>
                <Slider {...settings}>
                    <div className='select-type' key={0} onClick={handlerOnclick}>
                        <Image src={'https://i.imgur.com/c8f8XVR.png'} alt={'all'} className='type-img' rounded/>
                        <span className='food-type-name'>All</span>
                    </div>
                    {foodType &&
                    foodType.map((item)=>(
                    <div className='select-type' key={item.id} onClick={handlerOnclick}>
                        <Image src={item.img} alt={item.ft} className='type-img' rounded/>
                        <span className='food-type-name'>{item.ft}</span>
                    </div>
                    ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default FoodTypeSelect