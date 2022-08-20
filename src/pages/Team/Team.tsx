import { makeStyles } from "@material-ui/core";
import Subscription from "../../includes/Subscription/Subscription";
import Footer from "../../includes/Footer/Footer";
import React from "react";
import PageHeader from "../../includes/PageHeader/PageHeader";
import Member from "./Member/Member";
import { AppStylePropType } from "../../utils/types";
import Partners from "../../includes/Partners/Partners";
import Kits from "./Kits/Kits";
import data from "./Data/Data.json";
import Connect from "../AboutUs/Connect/Connect";
import icon1 from "../../assets/Icons/career2.png";
import icon2 from "../../assets/Icons/career1.png";
import Info from "../AboutUs/Info/Info";
import GradientCircle from "../../includes/GradientCircle/GradientCircle";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px",
    margin: "0 5% 10% 5%",
  },
  container: {
    width: "100%",
    borderRadius: "24px",
  },
  header: {
    fontSize: 32,
    fontWeight: 700,
    padding: "25px 0",
    margin: "0 auto",
    textAlign: "center",
  },
  TeamContainer: {
    position: "relative",
    background: "transparent",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    WebkitAlignContent: "space-evenly",
    padding: "0 5%",
    "@media (max-width: 425px)": {
      padding: "0",
    },
  },
  KitContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    WebkitAlignContent: "space-evenly",
    padding: "0 5%",
    marginBottom: "5%",
  },
  innerContainer: {
    margin: "0 15%",
    position: "relative",
  },
  bottomContainer: {
    // background: 'yellow',
    padding: "0 18px",
    borderBottom: "none",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "3px solid #2EADE1",
    "&& p": {
      color: "#fff",
      fontWeight: 400,
      fontSize: 22,
    },
    "@media (max-width: 425px)": {
      padding: "0 0.8rem",
      "&& p": {
        fontSize: 16,
      },
    },
  },
}));

export default function Team() {
  const classes = style();
  return (
    <>
      <div className={classes.root}>
        <div style={{ marginTop: "10%" }} />
        <PageHeader
          withUnderline={true}
          title={"about us"}
          smallHeader={
            "Visqorium Labs is a Blockchain-based company built to power Next-Generation Content Creation."
          }
        />
        <div className={classes.innerContainer}>
          <GradientCircle size={30} top={-30} left={-30} bottom={0} right={0} />
          <Info
            header={"The Mission"}
            text={
              "“Your posts do not follow community guidelines” is a Creator’s nightmare. Coupled with the fact that creators need a huge following and a marketing budget to generate revenue from their content.  Gone are the days when powerful Web 2 giants control our content, and creators posting their content to get likes and views."
            }
          />
          <div className={classes.bottomContainer}>
            <p>
              At Visqorium Labs, we believe Content Creation can be
              revolutionized via Web 3, enabling creators of all economical
              backgrounds to monetize, license, trade, and truly own their
              content. We give power back to the Creators, with no strings
              attached. Hence the phrase, "Next Generation Content Creation".
              Welcome to the future, Welcome to Visqorium Labs!
            </p>
          </div>
        </div>
        <div className={classes.container}>
          <PageHeader
            withUnderline={true}
            title={"meet the team"}
            smallHeader={
              "We are a team of talented and experienced designers, engineers, and developers who " +
              "are dedicated to using Blockchain technology to revolutionize content creation."
            }
          />
          <div className={classes.TeamContainer}>
            <GradientCircle size={20} top={10} left={40} bottom={0} right={0} />
            {data["team"].map(
              ({ image, name, role, linkedin, twitter }, index) => {
                return (
                  <Member
                    src={image}
                    name={name}
                    role={role}
                    linkedin={linkedin}
                    twitter={twitter}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className={classes.KitContainer}>
        <Kits
          title={"Press Kit"}
          header={"A one-stop kit for your Visqorium media needs."}
          btnText={"Download Press kit"}
        />
        <Kits
          link={"not-found"}
          title={"We're Hiring"}
          header={"Join us in empowering Next-Gen Creators."}
          btnText={"View Open Roles"}
        />
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
