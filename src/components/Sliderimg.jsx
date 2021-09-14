import React from "react";
import '../css/AboutStyle.css';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }`;
const customAnimation2 = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }`;

const Sliderimg = (props) => {

  return (
<div className='sliderMainDiv'>
      <Slider className="slider-wrapper" autoplay={0}>
          <div
            className="slider-content"
            style={{ backgroundImage: `url(${props.img})` }}
          >
            {/* <img className={classes.image_slide} src={item.image} alt={item.title} /> */}
            <div className="inner">
              <Reveal keyframes={customAnimation} delay={500}>
              <h3>{props.name}</h3>
              </Reveal>
              <Reveal keyframes={customAnimation2} delay={500}>
                <p>{props.cont}</p>
              </Reveal>
            </div>
          </div>
      </Slider> 
      </div>
  );
};

export default Sliderimg;
