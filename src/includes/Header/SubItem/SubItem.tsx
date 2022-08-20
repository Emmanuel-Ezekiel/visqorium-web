import React from "react";
import {makeStyles} from "@material-ui/core";
import {AppStylePropType} from "../../../utils/types";
import classNames from "classnames";
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        background: colors.white2,
        borderRadius: 10,
        margin: '16px 0',
        position: 'relative',
        height: '42px',
        width: '23vw'
    },
    text: {
        position: 'absolute',
        top: 0,
        left: 10,
        fontSize: 14,
        fontWeight: 500,
        color: '#222222'
    },
    arrow: {
        position: 'absolute',
        top: 0,
        right: 10,
    }
}))
export default function SubItem () {
    const classes = style();
    return (
        <div className={classNames(classes.root)}>
            <p className={classNames(classes.text)}>Niche</p>
            <p className={classNames(classes.arrow)}>&#8594;</p>
        </div>
    )
}
