import Subscription from "../../includes/Subscription/Subscription";
import Footer from "../../includes/Footer/Footer";
import React, { useEffect } from "react";
import PageHeader from "../../includes/PageHeader/PageHeader";
import { makeStyles } from "@material-ui/core";
import NicheType from "../../includes/Niche/NicheType";
import background from "../../assets/backgrounds/niche-background.png";
import logo from "../../assets/feature_logo.png";
import data from "./data.json";
import { Thumbnail, style } from "./Niche.styles";
// import VideoJS from './VideoJS';
// @ts-ignore
// import { DefaultPlayer as Video } from 'react-html5video';

export default function Niche() {
  const classes = style();
  const video = React.useRef<HTMLVideoElement>(null);
  const thumbnail = React.useRef<HTMLImageElement>(null);
  const startVideo = async (event: any) => {
    if (video.current != null && thumbnail.current != null) {
      try {
        thumbnail.current.click(); // artificial click
        changeDisplay(video, "block");
        changeDisplay(thumbnail, "none");
        await video.current.play();
      } catch (err) {
        console.log(err, "video play error");
      }
    }
  };
  const onEnd = () => {
    if (thumbnail.current != null && video.current != null) {
      changeDisplay(video, "none");
      changeDisplay(thumbnail, "block");
    }
  };
  const changeDisplay = (ref: any, value: string) => {
    ref.current.style.display = value;
  };
  const pauseVid = async () => {
    if (video.current != null) {
      try {
        await video.current.pause();
      } catch (err) {
        console.log(err, "video play error");
      }
    }
  };
  const playThrough = () => {
    if (video.current != null) {
      video.current.play().catch((e) => {
        window.addEventListener(
          "click",
          async () => {
            if (video.current != null) await video.current.play();
          },
          { once: true }
        );
      });
    }
  };
  useEffect(() => {
    // @ts-ignore
    video.current.style.display = "none";
    setTimeout(startVideo, 3000);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <PageHeader
          withUnderline={true}
          title={"Niches of Creators"}
          // smallHeader={"Empowering all types of Creators"}
        />
        <div className={classes.center}>
          <img className={classes.logo} src={logo} alt={"logo"} />
          <Thumbnail
            ref={thumbnail}
            className={classes.thumbnail}
            src={background}
            alt={"background"}
          />
          <video
            className={classes.video}
            onEnded={onEnd}
            onCanPlay={playThrough}
            ref={video}
            autoPlay
          >
            <source
              src={
                "https://creators-usea.streaming.media.azure.net/6e37ecb7-7081-49bb-b3c4-8d3868ef9693/IMG_0223_960x540_AACAudio_1539.mp4"
              }
              type="video/mp4"
            />
          </video>
          <div className={classes.fade}>
            <h1 className={classes.header}>jay bash</h1>
          </div>
        </div>
        <PageHeader withUnderline={true} title={"creators"} />
        <div className={classes.container}>
          {data["creators"].map(({ name, pic, niche, link }, index: any) => {
            return (
              <NicheType
                key={index}
                pic={pic}
                name={name}
                niche={niche}
                link={link}
              />
            );
          })}
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
