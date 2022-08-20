import React from "react";
import { makeStyles } from "@material-ui/core";
import underline from "../../assets/Icons/underline.png";
import { useStyles } from "./PageHeader.styles";

export default function PageHeader(props: any) {
  const classes = useStyles({ align: props.align });
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.header}>{props.title}</h1>
      {props.withUnderline ? (
        <img className={classes.underline} src={underline} alt={"underline"} />
      ) : null}
      {props.smallHeader !== null ? (
        <h5 className={classes.smallHeader}>{props.smallHeader}</h5>
      ) : null}
    </div>
  );
}
