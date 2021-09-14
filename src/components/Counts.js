import React from "react";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import classes from "../css/FoundationStyles.module.css";
import "./Slider_ani.css";
import CountUp from "react-countup";
import { donate, marker, proj, volun } from "../asset/images";

const useclasses = makeStyles((theme) => ({
  card: {
    margin: "2rem 1rem",
    borderRadius: "30px",
    backgroundColor: "#f3f3f3",
  },
  countHeading: {
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
  countDiv: {
    padding: "2rem",
    backgroundColor: "#fff",
  },
}));
function Counts() {
  const cs = useclasses();
  return (
    <div className={cs.countDiv}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        className={cs.countHeading}
      >
        Our Reach
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          ig={3}
          xl={2}
          component={Card}
          className={cs.card}
        >
          <CardContent>
            <Typography align="center" className={classes.heading}>
              <img src={proj} alt="" className={classes.count_img} />
            </Typography>
            <Typography align="center" variant="h5" gutterBottom>
              <CountUp start={0} end={974} duration={2.75} separator="," />
            </Typography>

            <Typography
              className={classes.heading}
              variant="body2"
              align="center"
            >
              PROJECT
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          ig={3}
          xl={2}
          component={Card}
          className={cs.card}
        >
          <CardContent>
            <Typography align="center" className={classes.heading}>
              <img src={volun} alt="" className={classes.count_img} />
            </Typography>
            <Typography align="center" variant="h5" gutterBottom>
              <CountUp start={0} end={5555} duration={2.75} separator="," />
            </Typography>

            <Typography
              align="center"
              className={classes.heading}
              variant="body2"
            >
              volunteer
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          ig={3}
          xl={2}
          component={Card}
          className={cs.card}
        >
          <CardContent>
            <Typography align="center" className={classes.heading}>
              <img src={donate} alt="" className={classes.count_img} />
            </Typography>
            <Typography align="center" variant="h5" gutterBottom>
              <CountUp start={0} end={54254} duration={4.75} separator="," />
            </Typography>

            <Typography
              className={classes.heading}
              variant="body2"
              align="center"
            >
              DONEES
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          ig={2}
          xl={2}
          component={Card}
          className={cs.card}
        >
          <CardContent>
            <Typography align="center" className={classes.heading}>
              <img src={marker} alt="" className={classes.count_img} />
            </Typography>
            <Typography align="center" variant="h5" gutterBottom>
              <CountUp start={0} end={54254} duration={2.75} separator="," />
            </Typography>

            <Typography
              className={classes.heading}
              variant="body2"
              align="center"
            >
              REGION
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
export default Counts;
