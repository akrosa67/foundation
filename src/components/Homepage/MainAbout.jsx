import React from "react";
import classes from "../../css/FoundationStyles.module.css";
import { Typography, makeStyles } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Fade } from "react-awesome-reveal";
import { adopt, avatar, ceoimg, plant } from "../../asset/images";
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

const useclasses = makeStyles((theme) => ({
  cardGrid: {
    padding: "10px",
  },
  mainHeading: {
    marginTop: "1rem",
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
}));
export const MainAbout = () => {
  const cs = useclasses();
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "30%",
  });

  return (
    <div className={classes.dddiv}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        className={cs.mainHeading}
      >
        Overview
      </Typography>

      <div className={classes.main_about_container}>
        {/* <Fade direction="left"> */}
        <Reveal keyframes={customAnimation} delay={500}>
          <img id="main" src={ceoimg} className={classes.main_ceo_img} alt="" />
        {/* </Fade> */}
        {/* <Fade direction="right"> */}
          <div className={classes.main_ceo_container_div}>
            <h2 className={classes.main_ceo_name}>Wiberto Blanc</h2>
            <h5 className={classes.main_ceo_tag}>CEO of Org</h5>
            <p>
              Lead Foundaation is a Registered Nonprofit Social Organization
              working for child development across India. Since its inception it
              has been working towards creating a generation of children who are
              not bound by the circumstances they are born into. Coming from the
              most desperate of situations, often with alcoholic fathers and a
              distressed home environment, their future looks bleak. At this
              organization such children are provided with education, food,
              shelter, love, care, and guidance in an effort to help them enjoy
              a happy life.
            </p>
          </div>
          </Reveal>
        {/* </Fade> */}
      </div>
      <div className={classes.goals}>
        <div>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            className={cs.mainHeading}
          >
            Our Objectives
          </Typography>
          <div className={classes.sub_goals}>
            <div className={classes.sub_goals_div}>
              <div className={classes.goals_png_head}>
                <img src={adopt} className={classes.svg_goals} alt="" />
                <h3>Save Children</h3>
              </div>
              <p>
                Every child, no matter who they are or where they come from,
                deserves a safe and protected upbringing. lion children live and
                survive on the unsafe
              </p>
            </div>
            <div className={classes.sub_goals_div}>
              <div className={classes.goals_png_head}>
                <img src={plant} className={classes.svg_goals} alt="" />
                <h3>More Green</h3>
              </div>
              <p>
                Works to protect forests, climate, and communities by replacing
                virgin paper use with recycled paper, curbing our overall use of
                paper products, and improving the recycling system.
              </p>
            </div>
            <div className={classes.sub_goals_div}>
              <div className={classes.goals_png_head}>
                <img src={avatar} className={classes.svg_goals} alt="" />
                <h3>Education</h3>
              </div>
              <p>
                Save the Children helps children with the donation money and
                provides them access to quality education. Visit the website to
                read about what we do for children’s education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
