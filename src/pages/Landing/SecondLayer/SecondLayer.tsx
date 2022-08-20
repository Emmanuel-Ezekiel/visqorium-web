import { ButtonBase, makeStyles, useTheme } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import { CustomTextGradient } from "../../../includes";
import { AppStylePropType } from "../../../utils/types";
import PageHeader from "../../../includes/PageHeader/PageHeader";
import Cards from "./Cards/Cards";
import data from "./data.json";
import {JoinBtn} from "../../../includes/Header2/Header2.styles";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    // padding: '5rem 4rem',
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    background:
      "linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
    borderRadius: 32,
    padding: "16px 24px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  cardContainer: {
    margin: "5%",
    width: "85%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    justifyItems: "center",
    alignContent: "space-evenly",
  },
}));
export default function SecondLayer() {
  const classes = style(),
    { colors } = useTheme() as AppStylePropType,
    { primary, secondary, accent } = colors || {};
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/aboutUs");
  };
  return (
    <div className={classes.root} id={"mission"}>
      {/*<PageHeader*/}
      {/*  withUnderline={true}*/}
      {/*  title={"our mission"}*/}
      {/*  smallHeader={*/}
      {/*    "To provide all the necessary tools that enables all Niches of Creators to peak their potential."*/}
      {/*  }*/}
      {/*/>*/}

      <div className={classes.cardContainer}>
        {data["niche"].map(({ title, icon }, index) => {
          return <Cards key={index} title={title} icon={icon} />;
        })}
      </div>
    </div>
  );
}
