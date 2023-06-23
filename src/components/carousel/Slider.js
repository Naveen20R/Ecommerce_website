import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import { CarouselImages } from '../../constant/Const';



function Slider() {

    return (
        <div  >
            <Carousel>
                {
                    CarouselImages.map((imagePath) => (
                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src={imagePath.img}
                                alt="First slide" id="imgs"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                       ))}
            </Carousel>
        </div>
    )}

export default Slider
