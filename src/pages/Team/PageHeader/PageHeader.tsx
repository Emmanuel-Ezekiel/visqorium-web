import React from "react";
import {makeStyles} from "@material-ui/core";
import {AppStylePropType} from "../../../utils/types";

const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    headerContainer: {
        // background: 'red',
        width: '55%',
        margin: '0 auto',
        "@media (max-width: 425px)": {
            width: '100%',
        }
    },
    header : {
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '74px',
        textAlign: 'center',
        color: colors.black,
        "@media (max-width: 425px)": {
            fontSize: 24,
            lineHeight: 1
        }
    },
    smallHeader: {
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '20px',
        textAlign: 'center',
        padding: '0px 5vw',
        minWidth: '300px',
        "@media (max-width: 425px)": {
            padding: '0px',
            fontSize: '14px'
        }
    },

}))
export default function PageHeader (props: any) {
    const classes = style();
    return (
        <div className={classes.headerContainer}>
            <h1 className={classes.header}>{props.title}</h1>
            <h5 className={classes.smallHeader}>{props.smallHeader}</h5>
        </div>
    )
}