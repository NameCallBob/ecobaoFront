import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap';
import useFetch from '../hooks/useFetch'


/***
*跑馬燈 react-slick
***/
function SimpleSlider() {
  const {data: slideImg} = useFetch("http://localhost:8002/sliderImg")

  return (
    // <div className='home-slider'>
        <Container fluid>
            {/* 投影片輪播 */}
            <Carousel>
              {slideImg &&
              slideImg.map((item)=>(
              <Carousel.Item key={item.id}>
                  <Image src={item.url} alt={item.title} fluid/>
              </Carousel.Item>
              ))
              }
            </Carousel>
        </Container>
    // </div>
  )
}



export default SimpleSlider