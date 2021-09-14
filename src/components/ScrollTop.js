import React, {useState} from 'react';
import classes from '../css/FoundationStyles.module.css';
import {FaArrowCircleUp} from 'react-icons/fa';
// import '../css/scrollTop.css';

const ScrollTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className={classes.scrollTop} onClick={scrollTop} style={{height: 45, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTop;