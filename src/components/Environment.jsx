import React from "react";
import classes from "../css/FoundationStyles.module.css";
import image1 from "../img/svg/work2.jpg";
import {Card, CardMedia, Grid, Typography } from "@material-ui/core";
import "../css/envi.css";

import { makeStyles } from "@material-ui/core";

const useclasses = makeStyles((theme) => ({
  typo_p: {
    fontSize: 16,
    
    [theme.breakpoints.up("xs")]: {
        fontSize: 15,
        padding:' 0 20px',
      },
    [theme.breakpoints.up("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 17,
      padding: "0 10px 10px 50px",
    },

  },
  typo_h4: {
    marginLeft: "20px",

    borderRadius: '5px',
    display:'inline-block',
    fontSize: 35,
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 40,
    },
  },
  typo_h5: {
    display:'inline-block',
    borderRadius:'5px',
    borderBottom:'3px solid #1a74fc',
    fontSize: 35,
    [theme.breakpoints.up("xs")]: {
      // paddingLeft: "20px",
      margin: "0 10px 10px 10px",
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 25,
   
      margin: "0 10px 10px 30px",
    },
  },
  envi_heading: {
      textAlign:'center',
      marginBottom:'10px',
    fontSize: 35,
    [theme.breakpoints.up("xs")]: {
        fontSize: 30,
      },
    [theme.breakpoints.up("sm")]: {
      fontSize: 50,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 45,
    },
  },
  img:{
      width:'100%'
  }
}));

const Environment = () => {
  const cs = useclasses();
  return (
 
 <div className={classes.envi_maindiv}>
    <div className={classes.envi_div}>
           <Typography variant="h3" gutterBottom className={cs.envi_heading}>
        What we Done
      </Typography>
      {/* <div className={classes.sec_maindiv}> */}
        <Grid container justify="center" spacing={5}>
          <Grid
            item
            xs={15}
            sm={4}
            // md={3}
            // ig={3}
            // xl={2}
          >
              <Typography className={cs.typo_h5} variant="h5" gutterBottom>
                In India
              </Typography>
              <Typography className={cs.typo_p} variant="body1">
              From the “crossroads of India in Madurai, Hyderabad, Convoy of Hope sends truckloads of food and relief supplies from its World Distribution Center to cities and rural towns. Convoy trucks travel coast to coast, delivering goods used for events and disaster responses.
              </Typography>
              <Typography className={cs.typo_h5} variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography className={cs.typo_p} variant="body1">
              Lead Foundation provides hope for the more than 10 thousand people affected by rare disease around the globe. We fulfill our mission by helping patients find and build communities, gain access to information and resources, connect to researchers, clinicians, industry, government, and other stakeholders, share data and experiences, stand up, stand out, and become effective advocates on their own behalf              </Typography>
              <Typography className={cs.typo_h5} variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography className={cs.typo_p} variant="body1">
                
              We envision a globally connected community equipped to eliminate the challenges of rare disease.
              </Typography>
          </Grid>
          <Grid
            item
            xs={15}
            sm={4}
            // md={3}
            // ig={3}
            // xl={2}
          >
              <div>
                <img src={image1} className={cs.img} alt='qqq' />
          </div>
          </Grid>
        </Grid>
    </div>
    </div>
  );
};

export default Environment;
