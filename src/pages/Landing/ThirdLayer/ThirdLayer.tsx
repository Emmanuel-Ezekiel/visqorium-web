import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { CustomTextGradient } from "../../../includes";
import { AppStylePropType } from "../../../utils/types";
import classNames from "classnames";
import PageHeader from "../../../includes/PageHeader/PageHeader";
import GradientCircle from "../../../includes/GradientCircle/GradientCircle";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    height: 725,
    padding: 20,
    color: colors.white,
    [breakpoints.up("lg")]: {
      backgroundSize: "cover",
    },
    [breakpoints.up("md")]: {
      padding: "50px 90px",
    },
    [breakpoints.down("sm")]: {
      paddingBottom: 50,
    },
  },
  header: {
    margin: 0,
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "74px",
    textAlign: "left",
    backgroundSize: "200% auto",
    background:
      "-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `1.6s linear 0.6s infinite normal none running $shine`,
  },
  
  "@keyframes shine": {
    to: {
      backgroundPosition: "200% center",
    },
  },
  subheader: {
    marginLeft: 10,
    fontWeight: 400,
    fontSize: 24,
    width: "61%",
  },
  qore: {
    width: "70%",
    marginLeft: "50%",
    transform: "translate(-50%, 0)",
  },
  itemContainer: {
    // marginBottom : 20,
    minHeight: 200,
    padding: 20,
  },
  itemImageContainer: {},
  itemHeader: {
    marginTop: 10,
    textAlign: "left",
    fontWeight: 500,
    fontSize: 22,
  },
  itemSubheader: {
    marginTop: 10,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: 16,
    color: " #E6E6E6",
  },
  hideInMobil: {
    [breakpoints.down("sm")]: {
      display: "block",
    },
  },
  gradientText: {
    fontSize: 40,
    fontWeight: 700,
    background:
      "-webkit-linear-gradient(45deg, #3FA6DC 0%, #8B459A 20.8%, #D02332 110.39%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
    padding: 0,
  },
}));
const data = [
  {
    image: "connected",
    header: "Non-Fungible Tokens",
    subheader:
      "Holders can trade NFTs using the $QORE Token on the Visqore NFT Marketplace.",
  },
  {
    image: "refresh",
    header: "Staking",
    subheader: "Holders can stake their $QORE Tokens and earn rewards.",
  },
  {
    image: "break",
    header: "Governance",
    subheader:
      "Holders can participate in voting proposals on the Visqorium ecosystem.",
  },
  {
    image: "done",
    header: "Validation",
    subheader:
      "Holders can participate in voting proposals on the Visqorium ecosystem.",
  },
];
export default function ThirdLayer() {
  const classes = style();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ alignItems: "center" }}>
        <GradientCircle size={35} top={-5} right={-15} bottom={0} left={0} />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <PageHeader
            title={"QORE Token"}
            smallHeader={
              "The $Qore coin is the official token of the Visqorium ecosystem."
            }
          />
          <div>
            <Grid container spacing={2}>
              {data.map(({ image, header, subheader }, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <div className={classes.itemContainer}>
                      <div className={classes.itemImageContainer}>
                        <img
                          src={`/images/header/${image}.png`}
                          title={image}
                        />
                      </div>
                      <div className={classes.itemHeader}>{header}</div>
                      <div className={classes.itemSubheader}>{subheader}</div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Grid>
        <Grid
          className={classes.hideInMobil}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
        >
          <img
            src="/images/header/qore_coin.png"
            className={classes.qore}
            title="Qore"
          />
        </Grid>
      </Grid>
    </div>
  );
}
export { ThirdLayer };
