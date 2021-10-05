import React from "react";
import { useEffect } from "react";
import classes from "../css/FoundationStyles.module.css";
import { Fade } from "react-awesome-reveal";
import { ImQuotesLeft } from "react-icons/im";
import {
  ceoimg,
  st1,
  st2,
  st3,
  st4,
  st5,
  st6,
  inveset,
  change,
  maintain,
  slideimg,
} from "../asset/images";
import {
  Grid,
  Paper,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Sliderimg from "../components/Sliderimg";

const useClasses = makeStyles((theme) => ({
  rootGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    minWidth: 100,
    maxWidth: 800,
  },
  subHeading: {
    color: "#000",
  },
  subPara: {
    textIndent: 50,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100px",
  },
  envi_heading: {
    textAlign: "center",
    marginBottom: "10px",
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
      fontSize: 50,
    },
  },
  profileGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const whatweDo = [
  {
    id: 1,
    title: "Investigate",
    image: inveset,
    desc: "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots Contrary to popular belief,Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots",
  },
  {
    id: 2,
    title: "Make Change",
    image: change,
    desc: "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots Contrary to popular belief,Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots",
  },
  {
    id: 1,
    title: "Keep Looking",
    image: maintain,
    desc: "Contrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots Contrary to popular belief,Lorem Ipsum is not simply random text. It has rootsContrary to popular belief, Lorem Ipsum is not simplyrandom text. It has roots",
  },
];

const profile = [
  {
    id: 1,
    f_name: "Moria",
    l_name: "Lubomirski",
    email: "mlubomirski0@latimes.com",
    image: st1,
  },
  {
    id: 2,
    f_name: "Marion",
    l_name: "Tyreman",
    email: "mtyreman1@businesswire.com",
    image: st2,
  },
  {
    id: 3,
    f_name: "Zulema",
    l_name: "Brookzie",
    email: "zbrookzie2@netscape.com",
    image: st3,
  },
  {
    id: 4,
    f_name: "Sonya",
    l_name: "Minter",
    email: "sminter3@engadget.com",
    image: st4,
  },
  {
    id: 5,
    f_name: "Leonard",
    l_name: "Sirr",
    email: "lsirr4@bandcamp.com",
    image: st5,
  },
  {
    id: 6,
    f_name: "Ned",
    l_name: "Fifoot",
    email: "nfifoot5@bluehost.com",
    image: st6,
  },
];

function About() {
  const cs = useClasses();
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <Sliderimg name="About" img={slideimg} />
      <div className={classes.about_quote}>
        <ImQuotesLeft className={classes.quote_img} size="4rem" />
        <h2>Triumph over prejudice and ignorance is a triumph for us all.</h2>
      </div>
      <div className={classes.ceo_container}>
        <div className={classes.about_container}>
          <div className={classes.ceo_img}>
            <Fade triggerOnce direction="left">
              <img src={ceoimg} className={classes.ceo_img} alt="" />
            </Fade>
          </div>
          <Fade triggerOnce direction="right">
            <div className={classes.ceo_container_div}>
              <h2 className={classes.main_ceo_name}>Wiberto Blanc</h2>
              <h5 className={classes.main_ceo_tag}>CEO of Org</h5>
              <p>
                Lead Foundaation is a Registered Nonprofit Social Organization
                working for child development across India. Since its inception
                it has been working towards creating a generation of children
                who are not bound by the circumstances they are born into.
                Coming from the most desperate of situations, often with
                alcoholic fathers and a distressed home environment, their
                future looks bleak. At this organization such children are
                provided with education, food, shelter, love, care, and guidance
                in an effort to help them enjoy a happy life.
                <br />
                It is a Non-Profitable & Non-Religious Organization dedicated to
                helping needy and neglected children. It has been Working in
                India for over 8 years. Riddhi Siddhi Charitable Trust approach
                focuses on basic education, health, Disaster, Skill Development,
                intervention, treatment, Care and lot more. During FY 2017-18
                RSCT directly reached out to 700000(7Lac) people through 15
                projects across covering 45 districts.
              </p>
            </div>
          </Fade>
        </div>
        <div className={classes.sec_container}>
          <Typography variant="h3" gutterBottom className={cs.envi_heading}>
            What we Do
          </Typography>
          <Grid container spacing={0} justify="center" className={cs.rootGrid}>
            {whatweDo.map((value) => (
              <Grid item xs={12} sm={12} md={8} ig={12} xl={6} key={value.id}>
                <Paper className={cs.card}>
                  <CardMedia
                    component="img"
                    justify="center"
                    className={cs.cover}
                    image={value.image}
                    title="Live from space album cover"
                  />
                  <div className={cs.details}>
                    <CardContent className={cs.content}>
                      <Typography
                        variant="h5"
                        className={cs.subHeading}
                        gutterBottom
                      >
                        {value.title}
                      </Typography>
                      <Typography className={cs.subPara} variant="body1">
                        {value.desc}
                      </Typography>
                    </CardContent>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className={classes.main_staff_div}>
        <h1 className={classes.staff_title}>Staffs</h1>
        <div className={classes.staff_container}>
          {profile.map((data) => (
            <div className={classes.staff_div} key={data.id}>
              <img
                src={data.image}
                className={classes.staff_img}
                alt={data.f_name}
              />
              <div className={classes.staff_detail}>
                <h3 className={classes.staff_name}>
                  {data.f_name} {data.l_name}
                </h3>
                <p className={classes.staff_desig}>{data.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Grid className={cs.profileGrid} container justify="center" spacing={2}>
        {profile.map((data) => (
          <Grid
            className="profile-card-2"
            item
            xs={15}
            sm={7}
            md={5}
            ig={5}
            xl={1}
            component='div'
          >
            
            <img src={img2} className="img" />
            <div className="profile-name">{data.f_name}</div>
            <div className="profile-username">{data.email}</div>
            <div className="profile-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          
          </Grid>
        ))}
      </Grid> */}

      {/* 
      <Grid container spacing={0}>
          {values.map((item,id)=>(
           
           <Grid className={cs.main_div} item key={id}>
                      <Paper >

        <CardMedia image={item.ima} component='img' className={cs.pro_image} />

      <div>
        <Typography variant='h5' className={cs.name}>{item.name}</Typography>
        <Typography variant='h6' className={cs.desig}>{item.desig}</Typography>
        <Typography variant='body2' className={cs.para}>{item.para}</Typography>
      </div>
    </Paper>
              </Grid>
          ))}
    </Grid> */}
    </div>
  );
}

export default About;
