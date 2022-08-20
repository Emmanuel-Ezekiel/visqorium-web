import {makeStyles} from "@material-ui/core";
import React from "react";
import {inspect} from "util";
import {AppStylePropType} from "../../../../utils/types";
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: '10px 0',
    },
    label: {
        paddingLeft: 3,
        textTransform: 'capitalize',
        fontWeight: 400,
        fontSize: '12px',
        color: colors.white,
        lineHeight: '13px'
    },
    input: {
        border: '1px solid #DCDDEB',
        borderRadius: '6.5px',
        height: '30px',
        paddingLeft: '15px',
        '&::placeholder': {
            color: '#8184A3'
        }
    }
}))
export default function TextField (props: any) {
    const classes = style();
    return (
        <div className={classes.container}>
            <label className={classes.label}>{props.label}</label>
            <input id={props.label} name={props.label} className={classes.input} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}