import React from 'react'
import Slide from "./Slide";
import classes from '../css/FoundationStyles.module.css';
import img1 from '../img/img1.jpg'

function Slide_img_Res() {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
      
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
      
        // Return the width so we can use it in our components
        return { width };
    }
        const MyComponent = () => {
            const { width } = useViewport();
            const breakpoint = 620;
          
            return width < breakpoint ? <img src={img1} className={classes.img_main} alt=''/> :<Slide className="slide"/>;
          }
    return (
        <MyComponent/>
    )
    }
export default Slide_img_Res
