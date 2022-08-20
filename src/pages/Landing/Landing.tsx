import { makeStyles } from "@material-ui/core";
import React from "react";
import Career from "../../includes/Career/Career";
import FAQ from "../../includes/FAQ/FAQ";
import Footer from "../../includes/Footer/Footer";
import { FourthLayer } from "./FourthLayer";
import Partners from "../../includes/Partners/Partners";
import SecondLayer from "./SecondLayer/SecondLayer";
import { ThirdLayer } from "./ThirdLayer";
import TopLayer from "./TopLayer/TopLayer";
import Subscription from "../../includes/Subscription/Subscription";
const style = makeStyles(({ breakpoints }) => ({
  root: {
    "@media (max-width: 425px)": {
      padding: " 0 0.8rem",
    },
  },
}));
export default function Landing() {
  const classes = style();
  return (
    <div className={classes.root}>
      <TopLayer />
      <SecondLayer />
      <div style={{ marginTop: 40 }} />
      <ThirdLayer />
      <div style={{ marginTop: 40 }} />
      <FourthLayer />
      <div style={{ marginTop: 40 }} />
      <Partners />
      <div style={{ marginTop: 40 }} />
      <Career />
      <div style={{ marginTop: 40 }} />
      <Subscription />
      <Footer />
    </div>
  );
}
