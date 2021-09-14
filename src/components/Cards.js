import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/card.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { card1, card2, card3 } from "../asset/images";
import { makeStyles } from "@material-ui/core";

const useclasses = makeStyles((theme) => ({
  cardGrid: {
    padding: "10px",
  },
  cardHeading: {
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
  cardImage: {
    width: "100%",
    height: "230px",
  },
  cardContent: {
    height: "230px",
  },
  cardTitle: {
    color: "#1a74fc",
  },
}));

const Cards = () => {
  const classes = useclasses();
  const card = [
    {
      id: 1,
      image: card1,
      location: "chennai",
      cardHeading: "Educate the Uneducated",
      description:
        " The predominance of hills and forest cover in the Seven Sister states adversely impact its terrain and geographic connectivity. Active fault planes result in heightened seismic activity.",
    },
    {
      id: 2,
      image: card2,
      location: "chennai",
      cardHeading: "Spreading the joy of reading in  pandemic",
      description:
        "A compilation of stories of children, teachers and librarians who inspire to keep going and give hope that things will get better, from Parag",
    },
    {
      id: 3,
      image: card3,
      location: "chennai",
      cardHeading: "Reclaiming the lost crops",
      description:
        "Drought-resistant fast-growing traditional crops like millet are re-emerging thanks to the Trusts’  adoption of the modern system of millet intensification",
    },
    {
      id: 4,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
      location: "chennai",
      cardHeading: "Tailoring Classes to Home Makers",
      description:
        "Tailoring classes for the women and widows from below poverty level, where they will trained and to start their own tailoring shop which they can lead their life.",
    },
  ];

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        className={classes.cardHeading}
      >
        Recent
      </Typography>
      <Grid container spacing={0} justify="center">
        {card.map((cardValue) => (
          <Grid
            className={classes.cardGrid}
            item
            xs={9}
            sm={4}
            md={3}
            ig={3}
            xl={2}
            key={cardValue.id}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.cardImage}
                  image={cardValue.image}
                  title="Paella dish"
                />

                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    className={classes.cardTitle}
                    variant="h5"
                    component="div"
                  >
                    {cardValue.cardHeading}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {cardValue.description}
                  </Typography>
                  <Typography variant="overline" align="right">
                    {cardValue.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
