import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const style = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: "100%",
    margin: "0% auto",
    position: "relative",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    "@media (max-width: 425px)": {
      flexDirection: "column",
    },
  },

  center: {
    position: "relative",
    minHeight: "1000px",
  },

  thumbnail: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },

  video: {
    width: "100%",
    margin: "auto",
  },

  logo: {
    position: "absolute",
    bottom: "16%",
    left: "50%",
    transform: "translate(-50%,0)",
  },

  fade: {
    position: "absolute",
    bottom: " -5%",
    width: "100%",
    height: "20%",
  },

  header: {
    textTransform: "uppercase",
    fontSize: "120px",
    fontWeight: 700,
    textAlign: "center",
    color: "#FFFFFF",
    position: "absolute",
    bottom: "-2%",
    left: "50%",
    transform: "translate(-50%,0)",
  },

  [theme.breakpoints.down("sm")]: {
    root: {
      padding: "50px 0",
      gap: "30px",
    },

    container: {
      gap: "0px",
    },

    center: {
      minHeight: "270px",
    },

    logo: {
      display: "none",
    },

    thumbnail: {
      height: "100%",
      maxWidth: "100%",
      margin: "auto",
    },

    video: {
      height: "100%",
      maxWidth: "100%",
    },

    header: {
      fontSize: 120,
      fontWeight: 700,
    },

    fade: {
      display: "none",
    },
  },
}));
