import { makeStyles } from "@material-ui/core";
import { AppStylePropType } from "../../../utils/types";
import classNames from "classnames";
import { Container, Flex } from "./ReachUs.styles";
import GradientCircle from "../../../includes/GradientCircle/GradientCircle";
import React from "react";

const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr 0.2fr",
    background: "black",
    color: "#fff",
    width: "73vw",
    borderRadius: "24px",
    marginBottom: "3%",
    "@media (max-width: 425px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(4, 1fr)",
    },
  },
  item: {
    placeSelf: "start stretch",
  },
  item1: {
    // background: 'red'
  },
  item2: {
    // background: 'green'
  },
  item3: {
    // background: 'yellow'
  },
  item4: {
    gridColumnStart: 1,
    gridColumnEnd: 4,
    "&& p": {
      marginLeft: "32px",
      color: "#32C5FF",
    },
  },
  header: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 2,
    margin: "12px 0 0 32px",
  },
  contact: {
    margin: "0 32px",
    "&& p:nth-child(1)": {
      fontWeight: 600,
      fontStyle: "italic",
    },
  },
  bold: {
    fontWeight: 800
  }
}));

export default function ReachUs() {
  const classes = style();
  const InnerDiv = (props: any) => {
    return (
      <div>
        <p className={classes.bold}>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    );
  };
  return (
    <Container>
      <GradientCircle size={30} top={0} left={-15} right={0} bottom={0} />

      <Flex>
        <div>
          <h3 className={classes.bold}>Find us</h3>
          <div>
            <InnerDiv
              text1={""}
              text2={"256 Champman Road, Newark, DE 19702, US."}
            />
          </div>
        </div>

        <div>
          <h3 className={classes.bold}>Email us</h3>
          <div>
            <InnerDiv
              text1={"For General inquires"}
              text2={"info@visqoriumlabs.io"}
            />
            <InnerDiv text1={"For Press"} text2={"press@visqoriumlabs.io"} />
            <InnerDiv
              text1={"For Partnerships"}
              text2={"partnerships@visqoriumlabs.io"}
            />
          </div>
        </div>

      </Flex>

      <div>
        <p>
          <b>Note: </b>Please allow up to <b>48hours</b> if no reply before
          sending a reminder, thank you.
        </p>
      </div>
    </Container>
  );
}
