import { makeStyles } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { AppStylePropType } from "../../utils/types";
import { Link } from "react-router-dom";
import { Container } from "./Career.styles";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    [breakpoints.up("md")]: {
      width: "90%",
      padding: "50px 150px",
    },
  },
  imageContainer: {
    marginBottom: 30,
    [breakpoints.down("sm")]: {
      margin: "30px 0",
    },
  },
  img: {
    height: 48,
    width: 48,
  },
  header: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 20,
    [breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  subheader: {
    fontSize: 18,
    marginBottom: 20,
    color: "#C4C4C4",
    [breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
}));
const data = [
  {
    image: "career1",
    header: "Help us build the future of Content Creation",
    subheader: "See potential job openings",
    link: {
      text: "See open opportunities",
      url: "",
    },
  },
  {
    image: "career2",
    header: "Join Visqorium Community",
    subheader: "Keep tabs on all things visqorium",
    link: {
      text: "Explore",
      url: "",
    },
  },
];
export default function Career() {
  const classes = style();
  return (
    <Container>
      <div className={classes.container}>
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className={classes.imageContainer}>
                  <img
                    src={`/images/header/${item.image}.png`}
                    className={classes.img}
                  />
                </div>
                <div className={classes.header}>{item.header}</div>
                <div className={classes.subheader}>{item.subheader}</div>
                <Link to={item.link.url} className={classes.link}>
                  {item.link.text}
                  <ArrowForward />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}
