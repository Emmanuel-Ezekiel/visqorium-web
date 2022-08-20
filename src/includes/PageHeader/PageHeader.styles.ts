import { makeStyles, createStyles } from "@material-ui/core";
type Props = {
  align: string;
};

export const useStyles = makeStyles<any, Props>(() =>
  createStyles({
    headerContainer: {
      margin: "0 auto",
      position: "relative",
    },
    header: {
      margin: 0,
      padding: 0,
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "64px",
      textAlign: "center",
        color: '#fff',
      // background:
      //   "-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      "@media (max-width: 425px)": {
        fontSize: "2rem",
      },
    },
    "@keyframes shine": {
      to: {
        backgroundPosition: "-100%",
      },
    },
    smallHeader: {
      color: "white",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "20px",
      textAlign: "center",
      padding: "0px 10vw",
        "@media (max-width: 425px)": {
            fontSize: "16px",
        },
    },

    underline: {
      position: "absolute",
      top: "75px",
      left: "50%",
      transform: "translate(-50%, 0)",
      "@media (max-width: 425px)": {
        display: "none",
      },
    },
  })
);
