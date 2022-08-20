import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { AppStylePropType } from "../../../utils/types";
import PageHeader from "../../../includes/PageHeader/PageHeader";
import tokonomics from "../../../assets/tokenomics.png";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    // position: 'relative'
    display: "block",
    "@media (max-width: 425px)": {
      marginTop: 650,
    },
  },
  tokonomics: {
    display: "block",
    marginTop: "10%",
    marginLeft: "50%",
    transform: "translate(-50%,0)",
    width: "60vw",
    "@media (max-width: 425px)": {
      width: "75vw",
      transform: "scale(1) translate(-50%,0)",
    },
  },
}));
export default function FourthLayer() {
  const classes = style();
  return (
    <div className={classes.root}>
      <PageHeader title={"tokenomics"} withUnderline={true} />
      <img className={classes.tokonomics} src={tokonomics} alt={"tokonomics"} />
    </div>
  );
}
export { FourthLayer };
