import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DynamicsCard from "./DynamicsCard";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <DynamicsCard/>
          </Slider>
        </div>
      );
    }
  }