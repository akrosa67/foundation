import React from "react";
import "./Styles.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import classes from "../css/FoundationStyles.module.css";
import { HiChevronDown } from "react-icons/hi";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import img1 from "../img/imgs/corona2.jpg";
import img2 from "../img/imgs/pic2.jpg";
import img3 from "../img/imgs/pic3.jpg";

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

const Slide = () => {
  const content = [
    {
      title: "Coronavirus Crisis Appeal",
      description:
        "Support the most discriminated communities to survive this crisis.",
      image: img1,
    },
    {
      title: "WHO WE ARE",
      description: "She has a dream.You could help her realise it.",
      image: img2,
    },
    {
      title: "orphan care initiative",
      description:
        "Lead Foundation provides Food,Education,Shelter to the Orphan kids.",
      image: img3,
    },
  ];

  const scroll = () => {
    // window.scrollTo({  top: 950, behavior: 'smooth'});
    window.scrollBy({
      top: 740, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Slider className="slider-wrapper" autoplay={2000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* <img className={classes.image_slide} src={item.image} alt={item.title} /> */}
          <div className="inner">
            <Reveal keyframes={customAnimation} delay={500}>
              <p>{item.title}</p>
            </Reveal>
            <Reveal keyframes={customAnimation2} delay={500}>
              <h3>{item.description}</h3>

              <button
                onClick={() => scroll()}
                className={classes.mainText_button}
              >
                EXPLORE
                <HiChevronDown className={classes.btn_arrow} size="1.5rem" />
              </button>
            </Reveal>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slide;

// import React, { Component } from "react";
// import classes from "../css/FoundationStyles.module.css";
// import { BsArrowDown } from "react-icons/bs";
// import { Fade } from "react-awesome-reveal";
// // import { Container, Typography, Button, Grid } from "@material-ui/core";

// export default class Slide extends Component {
//   constructor(props) {
//     super(props);

//   }
//  scroll = () =>{
//     // window.scrollTo({  top: 950, behavior: 'smooth'});
//     window.scrollBy({
//       top: 950, // could be negative value
//       left: 0,
//       behavior: 'smooth'
//     })
//   };
//   render() {
//     return (
//       <div>

//         <div className={classes.flex_div}>

//           <div className={classes.mainText_div}>
//           <Fade triggerOnce direction='up'>
//             <p className={classes.mainText_subtitle}><span ># </span>Most Trusted Org </p>
//             <h1 className={classes.mainText_head}>Welcome How you Doin.!</h1>
//             <h4 className={classes.mainText_para}>
//               click to dig in
//             </h4>
//             <button onClick={()=>this.scroll()} className={classes.mainText_button}>
//               EXPLORE
//               <BsArrowDown className={classes.btn_arrow} size="1.5rem" />
//             </button>
//             </Fade>
//           </div>

//         </div>

//       </div>

//     );
//   }
// }
