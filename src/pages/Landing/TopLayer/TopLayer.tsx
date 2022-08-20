import { ButtonBase, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { AppStylePropType } from "../../../utils/types";
import { CustomTextGradient } from "../../../includes";
import { useTheme } from "@material-ui/core";
import dollar_icon from "../../../assets/Icons/dollar_icon.png";
import license from "../../../assets/Icons/license.png";
import classNames from "classnames";
import trading_icon from "../../../assets/Icons/trading_icon.png";
import underline from "../../../assets/Icons/underline.png";
import GradientCircle from "../../../includes/GradientCircle/GradientCircle";
import { style } from "./TopLayer.styles";
import PageHeader from "../../../includes/PageHeader/PageHeader";
import {JoinBtn} from "../../../includes/Header2/Header2.styles";
import {Container} from "../SecondLayer/Cards/Cards.styles";

export default function TopLayer() {
  const classes = style(),
    { colors } = useTheme<AppStylePropType>(),
    { primary, secondary, accent } = colors || {};
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.newHeader}>
            Powered by{" "}
            <span className={classes.gradientTextBtn}>Creators.</span> Built for{" "}
            <span className={classes.gradientTextBtn}>Solutions.</span>
          </h1>
          {/*<GradientCircle size={20} top={0} left={10} right={0} bottom={0} />*/}
          <h5 className={classes.newSubHeader}>
            Providing all Necessary tools for all Niches of Creators to
            Monetize, license and Trade their Content Unprecedentedly.
          </h5>
          <JoinBtn
              // onClick={(e: React.MouseEvent<HTMLElement>) => navigate("/company/team")}
          >
            About us
          </JoinBtn>
          <div className={classes.innerContainer}>
            <div className={classes.headerContainer}>
              <h1 className={classes.header}>
                <span className={classes.gradientTextBtn}>Next-Generation</span>{" "}
                Content Creation
              </h1>
            </div>
            <p className={classes.subHeader2}>
              Welcome to the future of Content Creation
            </p>
            <div className={classes.iconContainer}>
              <div className={classes.innerIconContainer}>
                <img
                  className={classes.icon}
                  src={dollar_icon}
                  alt={"monetize"}
                />
                <p>Monetize</p>
                <p>Attach a monetary value to your content</p>
              </div>
              <div className={classes.innerIconContainer}>
                <img className={classes.icon} src={license} alt={"license"} />
                <p>License</p>
                <p>Tokenize your content on the blockchain</p>
              </div>
              <div className={classes.innerIconContainer}>
                <img
                  className={classes.icon}
                  src={trading_icon}
                  alt={"trade"}
                />
                <p>Trade</p>
                <p>Generate revenue off your content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { TopLayer };
