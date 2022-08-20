import React from "react";
import { makeStyles } from "@material-ui/core";
import PageHeader from "../../includes/PageHeader/PageHeader";
import Footer from "../../includes/Footer/Footer";
import Subscription from "../../includes/Subscription/Subscription";
import ReachUs from "../ContactUs/ReachUs/ReachUs";
import GetInTouch from "./GetInTouch/GetInTouch";
const style = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px",
    marginBottom: "10%",
    marginTop: "10%",
  },
}));
export default function ContactUs() {
  const classes = style();
  return (
    <>
      <div className={classes.root}>
        <PageHeader
          title={"Get in Touch"}
          smallHeader={""}
          withUnderline={true}
        />
        <ReachUs />
        <GetInTouch />
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
