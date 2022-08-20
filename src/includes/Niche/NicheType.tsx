import img from "../../assets/mt.png";
import arrow from "../../assets/Icons/45degree_arrow.png";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Video,Work } from "./NicheType.styles";
const style = makeStyles(({ breakpoints }) => ({
  innerContainer: {
    width: "370px",
    height: "380px",
    background: "blue",
    borderRadius: "24px",
    backgroundImage: `url(${img})`,
    position: "relative",
  },
  categoryContainer: {
    color: "white",
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 3,
    width: "102%",
    height: 85,
    zIndex: 0,
    // background: 'red',
    borderRadius: "0 0 10px 10px",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 90%)",
  },
  icon: {
    marginLeft: 10,
  },
  artiestName: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginLeft: 36,
  },
  span: {
    fontWeight: 700,
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
  span2: {
    position: "absolute",
    left: 36,
    margin: 0,
    padding: 0,
    bottom: 15,
    fontSize: 20,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  video: {
    width: "100%",
    height: "100%",
    margin: 0,
    display: "none",
  },
}));
export default function NicheType(props: any) {
  const classes = style();
  const video = React.useRef<HTMLVideoElement>(null);
  const thumbnail = React.useRef<HTMLImageElement>(null);
  return (
    <Container>
      <img
        ref={thumbnail}
        src={process.env.PUBLIC_URL + "/images/Creators" + props.pic}
        alt={"pic"}
      />
      {/*<Video*/}
      {/*       ref={video}*/}
      {/*       src={props.link}s*/}
      {/*       loop autoPlay={true} muted></Video>*/}
      {props.link.includes(".mp4") ? (
        <Video id="stream" controls src={props.link} />
      ) : (
        <Work src={process.env.PUBLIC_URL + "/images/ContentCreators" + props.link} alt={"img"} />
      )}

      <div className={classes.categoryContainer}>
        <div className={classes.artiestName}>
          <p className={classes.span}>{props.name}</p>
          <img className={classes.icon} src={arrow} alt={"45degree"} />
        </div>
        <p className={classes.span2}>{props.niche}</p>
      </div>
    </Container>
  );
}
