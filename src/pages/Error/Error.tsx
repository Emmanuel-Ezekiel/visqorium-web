import React from 'react';
import PropTypes from 'prop-types';
import error from '../../assets/backgrounds/404.png'
import {makeStyles} from "@material-ui/core";
import {AppStylePropType} from "../../utils/types";
import GradientCircle from "../../includes/GradientCircle/GradientCircle";
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        marginTop: "15%",
        transform: "translate(0,-15%)",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 425px)": {
            marginTop: "50%",
        },
    },
    img: {
        width: '60%',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 250,
        width: '42%',
        "@media (max-width: 425px)": {
            width: '95%',
            fontSize: 16,
        },
    }
}))

export default function Error() {
    const classes = style();
    return (
        <div className={classes.root}>
            <GradientCircle
                size={25}
                top={40}
                left={15}
                bottom={0}
                right={0}
            />
            <img className={classes.img} src={error} alt={'error_icon'}/>
            <p className={classes.text}>
                Oops! The page you are looking for does not exist.
                We are currently working on it. Do check back
            </p>
        </div>
    );
}
