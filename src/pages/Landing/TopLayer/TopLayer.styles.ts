import { makeStyles } from "@material-ui/core";
import { AppStylePropType } from "../../../utils/types";

export const style = makeStyles(
  ({ colors, breakpoints }: AppStylePropType) => ({
    root: {
      [breakpoints.down("sm")]: {
        width: "auto",
      },
    },
    iconContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
        // background: 'red',
      "@media (max-width: 425px)": {
        width: "55%",
        gap: 20,
      },
    },
    icon: {
      width: 150,
      height: 150,
      "@media (max-width: 425px)": {
        width: 50,
        height: 50,
      },
    },
    innerIconContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    img: {
      // width : "40%",
      height: 670,
      borderRadius: "0 20px 20px 0",
      [breakpoints.down("sm")]: {
        width: "60%",
      },
      "@media (max-width: 425px)": {
        display: "none",
      },
    },
    absolute: {
      position: "absolute",
      left: 100,
      top: "20%",
      [breakpoints.down("sm")]: {
        left: 0,
        fontSize: 14,
      },
    },
    gradientTextBtn: {
      background:
        "-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% auto",
      animation: `4s linear infinite alternate none running $shine`,
    },
    body: {
      fontSize: 64,
      fontWeight: 700,

      [breakpoints.down("sm")]: {
        fontSize: 24,
      },
      "@media (max-width: 425px)": {
        margin: "10px auto",
      },
    },
    input: {
      borderRadius: 32,
      border: "solid 1px grey",
      width: 390,
      height: 50,
      background: colors.white,
      padding: 10,
      [breakpoints.down("sm")]: {
        width: "80%",
      },
      "@media (max-width: 425px)": {
        padding: "20px 10px",
        margin: 10,
        height: 20,
        fontSize: 16,
      },
    },
    newsletter: {
      marginTop: 60,
      display: "flex",
      flexDirection: "column",
      "@media (max-width: 425px)": {
        marginTop: 0,
        alignItems: "center",
      },
    },
    btn: {
      width: 192,
      background: colors.white,
      borderRadius: 32,
      marginTop: 20,
      height: 45,
      fontSize: 12,
      padding: 14,

      "@media (max-width: 425px)": {
        marginTop: 10,
        height: 25,
      },
    },

    addup: {
      marginTop: "50px",
      height: 83,
      background: colors.gradient,
      borderRadius: 83,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      "@media (max-width: 425px)": {
        height: 25,
        gap: 0,
      },
    },
    container: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    newSubHeader: {
      margin: "20px 0 0 0",
      fontWeight: 400,
      fontSize: "1.875rem",
      color: "#C4C4C4",
      textAlign: "left",
      width: "80%",
      "@media (max-width: 425px)": {
        fontSize: "0.8rem",
      },
    },
    newHeader: {
      margin: "90px 0 0 0",
      fontSize: "95px",
      display: "inline-block",
      textAlign: "left",
      width: "80%",
      fontWeight: 700,
      color: "#fff",
      // backgroundSize: "200% auto",
      // background:
      //   "-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      // animation: `5s linear 0.6s infinite alternate none running $shine`,
      "@media (max-width: 425px)": {
        fontSize: "30px",
        width: "85%",
        margin: "40px 0 0 0",
      },
    },
    "@keyframes shine": {
      to: {
        // backgroundSize: '100% auto',
        backgroundPosition: "-100%",
      },
    },
    headerContainer: {},
    header: {
      margin: 0,
      padding: 0,
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "64px",
      textAlign: "center",
      color: "#fff",
      // background:
      //   "-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      "@media (max-width: 425px)": {
        fontSize: "2rem",
      },
    },
    innerContainer: {
      margin: "8% 0 0 0",
      padding: 10,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 425px)": {
        padding: "10px 5px",
      },
    },
    subHeader2: {
      margin: "30px auto",
      textAlign: "center",
      fontSize: 18,
      fontWeight: 400,
      width: "60%",
      "@media (max-width: 425px)": {
        fontSize: "0.9rem",
        width: "80%",
        // margin: "30px auto",
      },
    },
    underline: {
      position: "absolute",
      left: "60px",
      top: 80,
    },
  })
);
