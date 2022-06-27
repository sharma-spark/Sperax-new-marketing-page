import React, { Component } from "react";
import Slider from "react-slick";
import photo1 from './p1.svg'
import photo2 from './p2.svg'
import photo3 from './p3.svg'
import './slider.css'

export default class Fade extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: false,
            nextArrow: false

        };
        return (
            <div className="formob">
                <Slider {...settings}>
                    <div >
                        <div className="pimg" style={{ backgroundImage: `url(${photo1})` }}>
                            <div className="pibox">
                                <p>“Our team comprises a range of specialized talent. We push boundaries while sticking to fundamentals, with a broad vision to bring blockchain solutions to the world.”</p>
                                <span>-Rey Maximo, CTO</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pimg" style={{ backgroundImage: `url(${photo3})` }}>
                            <div className="pibox">
                                <p>“Our team comprises a range of specialized talent. We push boundaries while sticking to fundamentals, with a broad vision to bring blockchain solutions to the world.”</p>
                                <span>-Joe, Tech Lead</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}